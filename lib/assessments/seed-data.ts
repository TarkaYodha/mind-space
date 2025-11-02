// Seed data for mental health assessments
export const assessmentSeedData = [
  {
    id: 'phq9',
    name: 'PHQ-9 Depression Screening',
    description: 'A standardized tool to screen for depression symptoms over the past two weeks',
    type: 'depression',
    questions: [
      {
        id: 1,
        text: 'Little interest or pleasure in doing things',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 2,
        text: 'Feeling down, depressed, or hopeless',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 3,
        text: 'Trouble falling or staying asleep, or sleeping too much',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 4,
        text: 'Feeling tired or having little energy',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 5,
        text: 'Poor appetite or overeating',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 6,
        text: 'Feeling bad about yourself or that you are a failure or have let yourself or your family down',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 7,
        text: 'Trouble concentrating on things, such as reading the newspaper or watching television',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 8,
        text: 'Moving or speaking so slowly that other people could have noticed. Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 9,
        text: 'Thoughts that you would be better off dead, or of hurting yourself',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
    ],
    scoring_logic: {
      scoring_method: 'sum',
      ranges: [
        {
          min: 0,
          max: 4,
          severity: 'minimal',
          interpretation:
            "Minimal or no depression symptoms. You're doing well! Continue with healthy habits and reach out if you notice changes.",
        },
        {
          min: 5,
          max: 9,
          severity: 'mild',
          interpretation:
            "Mild depression symptoms. Consider talking to someone about how you're feeling and implementing self-care strategies.",
        },
        {
          min: 10,
          max: 14,
          severity: 'moderate',
          interpretation:
            'Moderate depression symptoms. We recommend speaking with a mental health professional for support.',
        },
        {
          min: 15,
          max: 19,
          severity: 'moderately_severe',
          interpretation:
            'Moderately severe depression symptoms. Professional help is strongly recommended to help you feel better.',
        },
        {
          min: 20,
          max: 27,
          severity: 'severe',
          interpretation:
            "Severe depression symptoms. Please seek professional help immediately. You don't have to go through this alone.",
        },
      ],
    },
  },
  {
    id: 'gad7',
    name: 'GAD-7 Anxiety Screening',
    description: 'A brief questionnaire to assess generalized anxiety disorder symptoms',
    type: 'anxiety',
    questions: [
      {
        id: 1,
        text: 'Feeling nervous, anxious, or on edge',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 2,
        text: 'Not being able to stop or control worrying',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 3,
        text: 'Worrying too much about different things',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 4,
        text: 'Trouble relaxing',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 5,
        text: 'Being so restless that it is hard to sit still',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 6,
        text: 'Becoming easily annoyed or irritable',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
      {
        id: 7,
        text: 'Feeling afraid, as if something awful might happen',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Several days' },
          { value: 2, text: 'More than half the days' },
          { value: 3, text: 'Nearly every day' },
        ],
      },
    ],
    scoring_logic: {
      scoring_method: 'sum',
      ranges: [
        {
          min: 0,
          max: 4,
          severity: 'minimal',
          interpretation:
            "Minimal anxiety symptoms. You're managing stress well! Keep up with healthy coping strategies.",
        },
        {
          min: 5,
          max: 9,
          severity: 'mild',
          interpretation:
            'Mild anxiety symptoms. Consider stress management techniques and talk to someone if symptoms persist.',
        },
        {
          min: 10,
          max: 14,
          severity: 'moderate',
          interpretation:
            'Moderate anxiety symptoms. We recommend speaking with a mental health professional to learn effective coping strategies.',
        },
        {
          min: 15,
          max: 21,
          severity: 'severe',
          interpretation:
            'Severe anxiety symptoms. Professional support is strongly recommended to help manage your anxiety.',
        },
      ],
    },
  },
  {
    id: 'stress',
    name: 'College Stress Assessment',
    description: 'Evaluate stress levels related to academic, social, and personal challenges',
    type: 'stress',
    questions: [
      {
        id: 1,
        text: 'How often do you feel overwhelmed by academic workload?',
        options: [
          { value: 0, text: 'Never' },
          { value: 1, text: 'Rarely' },
          { value: 2, text: 'Sometimes' },
          { value: 3, text: 'Often' },
          { value: 4, text: 'Always' },
        ],
      },
      {
        id: 2,
        text: 'How often do financial concerns cause you stress?',
        options: [
          { value: 0, text: 'Never' },
          { value: 1, text: 'Rarely' },
          { value: 2, text: 'Sometimes' },
          { value: 3, text: 'Often' },
          { value: 4, text: 'Always' },
        ],
      },
      {
        id: 3,
        text: 'How often do you worry about your future career?',
        options: [
          { value: 0, text: 'Never' },
          { value: 1, text: 'Rarely' },
          { value: 2, text: 'Sometimes' },
          { value: 3, text: 'Often' },
          { value: 4, text: 'Always' },
        ],
      },
      {
        id: 4,
        text: 'How often do social relationships cause you stress?',
        options: [
          { value: 0, text: 'Never' },
          { value: 1, text: 'Rarely' },
          { value: 2, text: 'Sometimes' },
          { value: 3, text: 'Often' },
          { value: 4, text: 'Always' },
        ],
      },
      {
        id: 5,
        text: 'How often do you have trouble sleeping due to stress?',
        options: [
          { value: 0, text: 'Never' },
          { value: 1, text: 'Rarely' },
          { value: 2, text: 'Sometimes' },
          { value: 3, text: 'Often' },
          { value: 4, text: 'Always' },
        ],
      },
    ],
    scoring_logic: {
      scoring_method: 'sum',
      ranges: [
        {
          min: 0,
          max: 5,
          severity: 'low',
          interpretation:
            "Low stress levels. You're managing college life well! Continue with your current coping strategies.",
        },
        {
          min: 6,
          max: 10,
          severity: 'moderate',
          interpretation:
            'Moderate stress levels. Consider implementing additional stress management techniques and self-care practices.',
        },
        {
          min: 11,
          max: 15,
          severity: 'high',
          interpretation:
            'High stress levels. We recommend speaking with a mental health professional about stress management strategies and support resources.',
        },
        {
          min: 16,
          max: 20,
          severity: 'very_high',
          interpretation:
            'Very high stress levels. Professional support is strongly recommended to help you develop effective coping strategies.',
        },
      ],
    },
  },
  {
    id: 'wellness',
    name: 'Student Wellness Check',
    description:
      'A comprehensive wellness assessment covering physical, mental, and social well-being',
    type: 'wellness',
    questions: [
      {
        id: 1,
        text: 'How would you rate your overall energy levels?',
        options: [
          { value: 4, text: 'Excellent - I feel energized most of the time' },
          { value: 3, text: 'Good - I have enough energy for daily activities' },
          { value: 2, text: 'Fair - I sometimes feel tired' },
          { value: 1, text: 'Poor - I often feel exhausted' },
          { value: 0, text: "Very poor - I'm constantly fatigued" },
        ],
      },
      {
        id: 2,
        text: 'How satisfied are you with your social connections?',
        options: [
          { value: 4, text: 'Very satisfied - I have strong, supportive relationships' },
          { value: 3, text: 'Satisfied - I have good relationships with friends/family' },
          { value: 2, text: 'Neutral - My relationships are okay but could be better' },
          { value: 1, text: 'Dissatisfied - I wish I had better connections' },
          { value: 0, text: 'Very dissatisfied - I feel lonely most of the time' },
        ],
      },
      {
        id: 3,
        text: 'How well are you managing your academic responsibilities?',
        options: [
          { value: 4, text: "Excellent - I'm on top of everything" },
          { value: 3, text: "Good - I'm managing well with occasional stress" },
          { value: 2, text: "Fair - I'm getting by but feeling overwhelmed sometimes" },
          { value: 1, text: "Poor - I'm struggling to keep up" },
          { value: 0, text: "Very poor - I'm falling behind significantly" },
        ],
      },
      {
        id: 4,
        text: 'How often do you engage in activities you enjoy?',
        options: [
          { value: 4, text: 'Daily - I regularly do things I love' },
          { value: 3, text: 'Several times a week' },
          { value: 2, text: 'Once a week' },
          { value: 1, text: 'Rarely - maybe once or twice a month' },
          { value: 0, text: "Never - I don't have time for enjoyable activities" },
        ],
      },
      {
        id: 5,
        text: 'How would you describe your sleep quality?',
        options: [
          { value: 4, text: 'Excellent - I sleep well and feel rested' },
          { value: 3, text: 'Good - I usually sleep well' },
          { value: 2, text: 'Fair - Sometimes I have trouble sleeping' },
          { value: 1, text: 'Poor - I often have sleep problems' },
          { value: 0, text: 'Very poor - I rarely get good sleep' },
        ],
      },
    ],
    scoring_logic: {
      scoring_method: 'sum',
      ranges: [
        {
          min: 0,
          max: 8,
          severity: 'low_wellness',
          interpretation:
            'Your wellness levels could use some attention. Consider focusing on self-care, seeking support, and making small positive changes to your daily routine.',
        },
        {
          min: 9,
          max: 12,
          severity: 'moderate_wellness',
          interpretation:
            "You're doing okay but there's room for improvement in your overall wellness. Consider identifying areas where you can make positive changes.",
        },
        {
          min: 13,
          max: 16,
          severity: 'good_wellness',
          interpretation:
            "You're maintaining good wellness habits! Keep up the positive practices and continue to prioritize your well-being.",
        },
        {
          min: 17,
          max: 20,
          severity: 'excellent_wellness',
          interpretation:
            "Excellent! You're thriving in multiple areas of wellness. You're a great example of balanced student life. Keep up the amazing work!",
        },
      ],
    },
  },
  {
    id: 'burnout',
    name: 'Academic Burnout Assessment',
    description: 'Identify signs of academic burnout and get personalized recommendations',
    type: 'burnout',
    questions: [
      {
        id: 1,
        text: 'How often do you feel emotionally exhausted by your studies?',
        options: [
          { value: 0, text: 'Never' },
          { value: 1, text: 'Rarely' },
          { value: 2, text: 'Sometimes' },
          { value: 3, text: 'Often' },
          { value: 4, text: 'Always' },
        ],
      },
      {
        id: 2,
        text: 'How frequently do you feel cynical about your studies or lose motivation?',
        options: [
          { value: 0, text: 'Never' },
          { value: 1, text: 'Rarely' },
          { value: 2, text: 'Sometimes' },
          { value: 3, text: 'Often' },
          { value: 4, text: 'Always' },
        ],
      },
      {
        id: 3,
        text: 'Do you feel less confident about your academic abilities than before?',
        options: [
          { value: 0, text: 'Not at all' },
          { value: 1, text: 'Slightly' },
          { value: 2, text: 'Moderately' },
          { value: 3, text: 'Quite a bit' },
          { value: 4, text: 'Extremely' },
        ],
      },
      {
        id: 4,
        text: 'How often do you procrastinate or avoid academic tasks?',
        options: [
          { value: 0, text: 'Never' },
          { value: 1, text: 'Rarely' },
          { value: 2, text: 'Sometimes' },
          { value: 3, text: 'Often' },
          { value: 4, text: 'Always' },
        ],
      },
    ],
    scoring_logic: {
      scoring_method: 'sum',
      ranges: [
        {
          min: 0,
          max: 4,
          severity: 'no_burnout',
          interpretation:
            "Great news! You're not showing signs of academic burnout. Keep maintaining healthy study habits and work-life balance.",
        },
        {
          min: 5,
          max: 8,
          severity: 'mild_burnout',
          interpretation:
            "You're showing some early signs of burnout. It's a good time to implement stress management strategies and ensure you're taking care of yourself.",
        },
        {
          min: 9,
          max: 12,
          severity: 'moderate_burnout',
          interpretation:
            "You're experiencing moderate burnout symptoms. Consider adjusting your workload, seeking support, and prioritizing self-care activities.",
        },
        {
          min: 13,
          max: 16,
          severity: 'high_burnout',
          interpretation:
            "You're showing significant signs of burnout. We strongly recommend speaking with a counselor or academic advisor about strategies to reduce your stress and workload.",
        },
      ],
    },
  },
]
