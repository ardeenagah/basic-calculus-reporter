// Complete schedule data for all weeks
const scheduleData = {
    week1: [
        {
            date: 'November 19, 2025',
            day: 'Lunes',
            topic: 'Illustrate the limit of a function using table of values and graph',
            code: 'STEM_BC11LC-IIIa-1',
            duration: '1.5 hours',
            activities: 'Interactive graphing (Desmos/GeoGebra), Grouping: 4-5 students',
            reporterCount: 5
        },
        {
            date: 'November 20, 2025',
            day: 'Martes',
            topic: 'Distinguish between lim f(x) at x→c and f(c)',
            code: 'STEM_BC11LC-IIIa-2',
            duration: '1 hour',
            activities: 'Discussion + board work, Real-life examples',
            reporterCount: 3
        },
        {
            date: 'November 21, 2025',
            day: 'Miyerkules',
            topic: 'Illustrate the limit laws',
            code: 'STEM_BC11LC-IIIa-3',
            duration: '1 hour',
            activities: 'Presentation ng basic laws (Sum, Product, Quotient Rules)',
            reporterCount: 3
        },
        {
            date: 'November 22, 2025',
            day: 'Huwebes',
            topic: 'Apply limit laws in evaluating limits of algebraic functions',
            code: 'STEM_BC11LC-IIIa-4',
            duration: '2 hours',
            activities: 'Problem solving session (Polynomial, rational, radical functions)',
            reporterCount: 4
        }
    ],
    week2: [
        {
            date: 'November 25, 2025',
            day: 'Lunes',
            topic: 'Compute limits of exponential, logarithmic, and trigonometric functions',
            code: 'STEM_BC11LC-IIIb-1',
            duration: '2 hours',
            activities: 'Use tables and graphs (Focus: e^x, ln x, sin x, cos x)',
            reporterCount: 4
        },
        {
            date: 'November 26, 2025',
            day: 'Martes',
            topic: 'Evaluate limits: sin t/t, (1-cos t)/t, (e^t-1)/t',
            code: 'STEM_BC11LC-IIIb-2',
            duration: '1.5 hours',
            activities: 'Calculator exercise, Numerical approach',
            reporterCount: 3
        },
        {
            date: 'November 27, 2025',
            day: 'Miyerkules',
            topic: 'Illustrate continuity of a function at a number',
            code: 'STEM_BC11LC-IIIc-1',
            duration: '1 hour',
            activities: 'Definition + examples, Piecewise functions',
            reporterCount: 3
        },
        {
            date: 'November 28, 2025',
            day: 'Huwebes',
            topic: 'Determine if function is continuous at a number | Illustrate continuity on an interval',
            code: 'STEM_BC11LC-IIIc-2, STEM_BC11LC-IIIc-3',
            duration: '2 hours',
            activities: 'Combined discussion, Seatwork + recitation',
            reporterCount: 4
        }
    ],
    week3: [
        {
            date: 'Disyembre 2, 2025',
            day: 'Lunes',
            topic: 'Determine if function is continuous on an interval',
            code: 'STEM_BC11LC-IIIc-4',
            duration: '1.5 hours',
            activities: 'Practice problems, Interval notation review',
            reporterCount: 3
        },
        {
            date: 'Disyembre 3, 2025',
            day: 'Martes',
            topic: 'Illustrate types of discontinuity (removable, jump, infinite)',
            code: 'STEM_BC11LC-IIId-1',
            duration: '2 hours',
            activities: 'Graph analysis (Butas, laktaw, asymptote)',
            reporterCount: 4
        },
        {
            date: 'Disyembre 4, 2025',
            day: 'Miyerkules',
            topic: 'Illustrate Intermediate Value Theorem & Extreme Value Theorem',
            code: 'STEM_BC11LC-IIId-2',
            duration: '1.5 hours',
            activities: 'Proof explanation, Applications sa real-life',
            reporterCount: 3
        },
        {
            date: 'Disyembre 5, 2025',
            day: 'Huwebes',
            topic: 'Solve problems involving continuity',
            code: 'STEM_BC11LC-IIId-3',
            duration: '2 hours',
            activities: 'Long Quiz/Problem Set - Review ng Weeks 1-3',
            reporterCount: 4
        }
    ],
    week4: [
        {
            date: 'Enero 5, 2026',
            day: 'Lunes',
            topic: 'Illustrate tangent line to graph of function',
            code: 'STEM_BC11D-IIIe-1',
            duration: '1 hour',
            activities: 'Visual presentation (Secant vs. Tangent line)',
            reporterCount: 3
        },
        {
            date: 'Enero 6, 2026',
            day: 'Martes',
            topic: 'Apply definition of derivative | Relate derivative to slope of tangent line',
            code: 'STEM_BC11D-IIIe-2, STEM_BC11D-IIIe-3',
            duration: '2 hours',
            activities: 'Limit definition of derivative, Board examples',
            reporterCount: 4
        },
        {
            date: 'Enero 7, 2026',
            day: 'Miyerkules',
            topic: 'Determine relationship between differentiability and continuity',
            code: 'STEM_BC11D-IIIf-1',
            duration: '1.5 hours',
            activities: 'Counterexamples (e.g., f(x) = |x| at x=0)',
            reporterCount: 3
        },
        {
            date: 'Enero 8, 2026',
            day: 'Huwebes',
            topic: 'Derive differentiation rules',
            code: 'STEM_BC11D-IIIf-2',
            duration: '2 hours',
            activities: 'Power, Sum, Product, Quotient Rules - Proof sketches',
            reporterCount: 4
        }
    ],
    week5: [
        {
            date: 'Enero 12, 2026',
            day: 'Lunes',
            topic: 'Apply differentiation rules (algebraic, exponential, trig)',
            code: 'STEM_BC11D-IIIf-3',
            duration: '2 hours',
            activities: 'Drill exercises, Group activity',
            reporterCount: 4
        },
        {
            date: 'Enero 13, 2026',
            day: 'Martes',
            topic: 'Solve optimization problems',
            code: 'STEM_BC11D-IIIg-1',
            duration: '1.5 hours',
            activities: 'Max/min problems, Real-world applications (e.g., box design)',
            reporterCount: 3
        },
        {
            date: 'Enero 14, 2026',
            day: 'Miyerkules',
            topic: 'Compute higher-order derivatives',
            code: 'STEM_BC11D-IIIh-1',
            duration: '1 hour',
            activities: "f', f'', f''' notation, Examples",
            reporterCount: 3
        },
        {
            date: 'Enero 15, 2026',
            day: 'Huwebes',
            topic: 'Illustrate Chain Rule | Solve problems using Chain Rule',
            code: 'STEM_BC11D-IIIh-2, STEM_BC11D-IIIh-i-1',
            duration: '2 hours',
            activities: 'Composite functions, Practice problems',
            reporterCount: 4
        }
    ],
    week6: [
        {
            date: 'Enero 16, 2026',
            day: 'Huwebes',
            topic: 'Illustrate implicit differentiation | Solve problems (logarithmic, inverse trig) | Solve situational problems involving related rates',
            code: 'STEM_BC11D-IIIi-2, STEM_BC11D-IIIi-j-1, STEM_BC11D-IIIj-2',
            duration: '3 hours',
            activities: 'Focus on circles, logarithms (dy/dx without solving for y) | Word problems (balloon inflation, ladder sliding)',
            reporterCount: 5
        }
    ]
};
