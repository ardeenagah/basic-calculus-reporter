// Configuration - REPLACE WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';

// State management
let currentWeek = '';
let teacherName = '';
let section = '';

// DOM Elements
const weekSelector = document.getElementById('weekSelector');
const scheduleContainer = document.getElementById('scheduleContainer');
const statusMessage = document.getElementById('statusMessage');
const loadingOverlay = document.getElementById('loadingOverlay');
const teacherNameInput = document.getElementById('teacherName');
const sectionInput = document.getElementById('section');
const connectionStatus = document.getElementById('connectionStatus');

// Event Listeners
weekSelector.addEventListener('change', handleWeekChange);
teacherNameInput.addEventListener('change', (e) => teacherName = e.target.value);
sectionInput.addEventListener('change', (e) => section = e.target.value);

// Check online status
window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    updateConnectionStatus();
});

// Function: Handle week selection
function handleWeekChange(e) {
    currentWeek = e.target.value;
    
    if (!currentWeek) {
        scheduleContainer.innerHTML = '';
        return;
    }
    
    renderSchedule(currentWeek);
}

// Function: Render schedule for selected week
function renderSchedule(week) {
    const days = scheduleData[week];
    
    if (!days) {
        scheduleContainer.innerHTML = '<p class="error">Schedule data not found.</p>';
        return;
    }
    
    scheduleContainer.innerHTML = '';
    
    days.forEach((day, index) => {
        const dayCard = createDayCard(day, week, index);
        scheduleContainer.appendChild(dayCard);
    });
}

// Function: Create day card
function createDayCard(day, week, dayIndex) {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.id = `${week}-day${dayIndex}`;
    
    card.innerHTML = `
        <div class="day-header">
            <h4>${day.day} - ${day.date}</h4>
            <span>${day.duration}</span>
        </div>
        
        <div class="day-info">
            <p><strong>📖 Topic:</strong> ${day.topic}</p>
            <p><strong>🔖 Code:</strong> ${day.code}</p>
            <p><strong>📝 Activities:</strong> ${day.activities}</p>
        </div>
        
        <div class="reporter-inputs" id="reporters-${week}-${dayIndex}">
            ${generateReporterInputs(day.reporterCount, week, dayIndex)}
        </div>
        
        <button class="save-btn" onclick="saveReporters('${week}', ${dayIndex})">
            💾 Save Reporters for ${day.day}
        </button>
    `;
    
    return card;
}

// Function: Generate reporter input fields
function generateReporterInputs(count, week, dayIndex) {
    let html = '';
    
    for (let i = 1; i <= count; i++) {
        html += `
            <div class="reporter-group">
                <label for="${week}-day${dayIndex}-reporter${i}">Reporter ${i}:</label>
                <input 
                    type="text" 
                    id="${week}-day${dayIndex}-reporter${i}"
                    placeholder="Enter full name"
                    data-week="${week}"
                    data-day="${dayIndex}"
                    data-reporter="${i}"
                >
            </div>
        `;
    }
    
    return html;
}

// Function: Save reporters to Google Sheets
async function saveReporters(week, dayIndex) {
    // Validate teacher info
    if (!teacherName || !section) {
        showStatus('Please enter Teacher Name and Class Section first!', 'error');
        return;
    }
    
    const day = scheduleData[week][dayIndex];
    const reporters = {};
    
    // Collect reporter names
    for (let i = 1; i <= day.reporterCount; i++) {
        const input = document.getElementById(`${week}-day${dayIndex}-reporter${i}`);
        reporters[`reporter${i}`] = input ? input.value.trim() : '';
    }
    
    // Check if at least one reporter is entered
    const hasReporter = Object.values(reporters).some(name => name !== '');
    
    if (!hasReporter) {
        showStatus('Please enter at least one reporter name!', 'error');
        return;
    }
    
    // Prepare data
    const data = {
        date: day.date,
        day: day.day,
        week: week.toUpperCase(),
        topic: day.topic,
        code: day.code,
        duration: day.duration,
        ...reporters,
        teacherName: teacherName,
        section: section
    };
    
    // Show loading
    showLoading(true);
    
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        // Since we're using no-cors, we can't read the response
        // Assume success if no error is thrown
        showLoading(false);
        showStatus(`✅ Successfully saved reporters for ${day.day}!`, 'success');
        
        // Save to localStorage as backup
        saveToLocalStorage(week, dayIndex, data);
        
        // Clear inputs after successful save
        clearReporterInputs(week, dayIndex, day.reporterCount);
        
    } catch (error) {
        showLoading(false);
        showStatus(`❌ Error saving data: ${error.message}. Data saved locally.`, 'error');
        
        // Save to localStorage as backup
        saveToLocalStorage(week, dayIndex, data);
    }
}

// Function: Clear reporter inputs after save
function clearReporterInputs(week, dayIndex, count) {
    for (let i = 1; i <= count; i++) {
        const input = document.getElementById(`${week}-day${dayIndex}-reporter${i}`);
        if (input) input.value = '';
    }
}

// Function: Show loading overlay
function showLoading(show) {
    loadingOverlay.classList.toggle('active', show);
}

// Function: Show status message
function showStatus(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = `status-message ${type}`;
    
    setTimeout(() => {
        statusMessage.className = 'status-message';
    }, 5000);
}

// Function: Save to localStorage
function saveToLocalStorage(week, dayIndex, data) {
    const key = `${week}-day${dayIndex}`;
    localStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem('teacherName', teacherName);
    localStorage.setItem('section', section);
}

// Function: Load saved data from localStorage
function loadSavedData() {
    const savedTeacher = localStorage.getItem('teacherName');
    const savedSection = localStorage.getItem('section');
    
    if (savedTeacher) {
        teacherNameInput.value = savedTeacher;
        teacherName = savedTeacher;
    }
    
    if (savedSection) {
        sectionInput.value = savedSection;
        section = savedSection;
    }
}

// Function: Update connection status
function updateConnectionStatus() {
    const isOnline = navigator.onLine;
    const dot = connectionStatus.querySelector('.status-dot');
    
    if (isOnline) {
        connectionStatus.innerHTML = '<span class="status-dot online"></span> Online';
    } else {
        connectionStatus.innerHTML = '<span class="status-dot offline"></span> Offline';
    }
}

// Function: Export all data (for backup)
function exportAllData() {
    const allData = {};
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        allData[key] = JSON.parse(localStorage.getItem(key));
    }
    
    const dataStr = JSON.stringify(allData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'basic-calculus-reporters-backup.json';
    a.click();
}
