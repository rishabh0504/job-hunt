const validation = {
    firstName: '^[a-zA-Z]+$',
    lastName: '^[a-zA-Z]+$',
    contactNumber: '^(?:\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$',
    emailId: '^\S+@\S+$',
    dateOfBirth: '.*',
    countryOfResidence: '^[a-zA-Z]+$',
    nationality: '^[a-zA-Z]+$',
    gender: '^[a-zA-Z]+$'
};

const UserErrors = {
    firstName: false,
    lastName: false,
    contactNumber: false,
    emailId: false,
    dateOfBirth: false,
    nationality: false,
    countryOfResidence: false,
    gender: false
}

const genders = [
    {
        label: 'Male',
        value: 'Male',
        location: '/images/calender.png'
    },
    {
        label: 'Female',
        value: 'Female',
        location: '/images/calender.png'
    }
]


const finanicalSavings = [
    {
        label: 'No Savings',
        value: 'No Savings',
        location: '/images/calender.png'
    },
    {
        label: '1 to 1000 AED',
        value: '1 to 1000 AED',
        location: '/images/calender.png'
    },
    {
        label: '1000 to 5000 AED',
        value: '1000 to 5000 AED',
        location: '/images/calender.png'
    },
    {
        label: '5000 to 10000 AED',
        value: '5000 to 10000 AED',
        location: '/images/calender.png'
    },
    {
        label: '10000 to 20000 AED',
        value: '10000 to 20000 AED',
        location: '/images/calender.png'
    },
    {
        label: '20000 to 50000 AED',
        value: '20000 to 50000 AED',
        location: '/images/calender.png'
    },
    {
        label: '50000+ AED',
        value: '50000+ AED',
        location: '/images/calender.png'
    },

];

const levelOfEducation = [
    {
        label: 'High school or less',
        value: 'High school or less',
        location: '/images/calender.png'
    },
    {
        label: 'Collage',
        value: 'Collage',
        location: '/images/calender.png'
    },
    {
        label: 'Diploma',
        value: 'Diploma',
        location: '/images/calender.png'
    },
    {
        label: 'Batchelors',
        value: 'Batchelors',
        location: '/images/calender.png'
    },
]

const educationCompletion = [
    {
        label: 'Right now',
        value: 'Right now',
        location: '/images/calender.png'
    },
    {
        label: '0 to 3 months',
        value: '0 to 3 months',
        location: '/images/calender.png'
    },
    {
        label: '3 to 6 months',
        value: '3 to 6 months',
        location: '/images/calender.png'
    },
    {
        label: '6 to 12 months',
        value: '6 to 12 months',
        location: '/images/calender.png'
    },
    {
        label: 'After 1 year',
        value: 'After 1 year',
        location: '/images/calender.png'
    }, {
        label: "I'm not sure",
        value: "I'm not sure",
        location: '/images/calender.png'
    },
]
const visitedOptions = [
    {
        label: 'Yes',
        value: true,
        location: '/images/up.png'
    },
    {
        label: 'No',
        value: false,
        location: '/images/down.png'
    }
]
const firendsAndRelative = [
    {
        label: 'Yes',
        value: true,
        location: '/images/up.png'
    },
    {
        label: 'No',
        value: false,
        location: '/images/down.png'
    }
]
const stayTime = [
    {
        label: 'Upto 3 months',
        value: '3',
        location: '/images/calender.png'
    },
    {
        label: '3 to 6 months',
        value: '3-6',
        location: '/images/calender.png'
    },
    {
        label: '6 to 12 months',
        value: '6-12',
        location: '/images/calender.png'
    },
    {
        label: '+12 months',
        value: '12+',
        location: '/images/calender.png'
    },
    {
        label: '+3 years',
        value: '+3y',
        location: '/images/calender.png'
    },
]
const reasonToTravel = [
    {
        label: 'Lifestyle',
        value: 'Lifestyle',
        location: '/images/calender.png'
    },
    {
        label: 'Work opportunities',
        value: 'Work opportunities',
        location: '/images/calender.png'
    },
    {
        label: 'Education',
        value: 'Education',
        location: '/images/calender.png'
    },
    {
        label: 'Finance',
        value: 'Finance',
        location: '/images/calender.png'
    },
    {
        label: 'Tourism',
        value: 'Tourism',
        location: '/images/calender.png'
    },
    {
        label: 'Business',
        value: 'Business',
        location: '/images/calender.png'
    },
    {
        label: 'Security',
        value: 'Security',
        location: '/images/calender.png'
    },
    {
        label: 'Culture',
        value: 'Culture',
        location: '/images/calender.png'
    },
    {
        label: 'Family',
        value: 'Family',
        location: '/images/family.png'
    },
]

const areaofInterest = [
    {
        label: 'Outdoors',
        value: 'Outdoors',
        location: '/images/calender.png'
    },
    {
        label: 'Fitness',
        value: 'Fitness',
        location: '/images/calender.png'
    },
    {
        label: 'Health',
        value: 'Health',
        location: '/images/calender.png'
    },
    {
        label: 'Travel',
        value: 'Travel',
        location: '/images/calender.png'
    }, {
        label: 'Sports',
        value: 'Sports',
        location: '/images/calender.png'
    }, {
        label: 'Theme parks',
        value: 'Theme parks',
        location: '/images/calender.png'
    }, {
        label: 'Cooking',
        value: 'Cooking',
        location: '/images/calender.png'
    }, {
        label: 'Adventure',
        value: 'Adventure',
        location: '/images/calender.png'
    }, {
        label: 'Music',
        value: 'Music',
        location: '/images/calender.png'
    }, {
        label: 'Fashion',
        value: 'Fashion',
        location: '/images/calender.png'
    }, {
        label: 'Technology',
        value: 'Technology',
        location: '/images/calender.png'
    }, {
        label: 'Architecture',
        value: 'Architecture',
        location: '/images/calender.png'
    }, {
        label: 'Writing',
        value: 'Writing',
        location: '/images/calender.png'
    }, {
        label: 'Gaming',
        value: 'Gaming',
        location: '/images/calender.png'
    }, {
        label: 'Dining',
        value: 'Dining',
        location: '/images/calender.png'
    },
    {
        label: 'History',
        value: 'History',
        location: '/images/calender.png'
    },
    {
        label: 'Theatre',
        value: 'Theatre',
        location: '/images/calender.png'
    },
    {
        label: 'Networking',
        value: 'Networking',
        location: '/images/calender.png'
    }, {
        label: 'Art',
        value: 'Art',
        location: '/images/calender.png'
    }, {
        label: 'Politics',
        value: 'Politics',
        location: '/images/calender.png'
    }, {
        label: 'Fishing',
        value: 'Fishing',
        location: '/images/calender.png'
    }, {
        label: 'Meet people',
        value: 'Meet people',
        location: '/images/calender.png'
    }, {
        label: 'Podcasts',
        value: 'Podcasts',
        location: '/images/calender.png'
    }, {
        label: 'Gambling',
        value: 'Gambling',
        location: '/images/calender.png'
    }, {
        label: 'Self improvement',
        value: 'Self improvement',
        location: '/images/calender.png'
    }, {
        label: 'Foreign languages',
        value: 'Foreign languages',
        location: '/images/calender.png'
    },
    {
        label: 'Movies',
        value: 'Movies',
        location: '/images/calender.png'
    }, {
        label: 'Celebrities',
        value: 'Celebrities',
        location: '/images/calender.png'
    }, {
        label: 'Dating',
        value: 'Dating',
        location: '/images/calender.png'
    }, {
        label: 'Social media',
        value: 'Social media',
        location: '/images/calender.png'
    }, {
        label: 'Photography',
        value: 'Photography',
        location: '/images/calender.png'
    }
]
const industryPreferredForWork = [
    {
        label: 'Construction',
        value: 'Construction',
        location: '/images/calender.png'
    },
    {
        label: 'Hospitality',
        value: 'Hospitality',
        location: '/images/calender.png'
    },
    {
        label: 'Real estate',
        value: 'Real estate',
        location: '/images/calender.png'
    },
    {
        label: 'Tourism',
        value: 'Tourism',
        location: '/images/calender.png'
    },
    {
        label: 'Manufacturing',
        value: 'Manufacturing',
        location: '/images/calender.png'
    },
    {
        label: 'Farming',
        value: 'Farming',
        location: '/images/calender.png'
    },
    {
        label: 'Fishing',
        value: 'Fishing',
        location: '/images/calender.png'
    },
    {
        label: 'Education',
        value: 'Education',
        location: '/images/calender.png'
    },
    {
        label: 'Public services',
        value: 'Public services',
        location: '/images/family.png'
    },
    {
        label: 'Administration',
        value: 'Administration',
        location: '/images/calender.png'
    },
    {
        label: 'Media',
        value: 'Media',
        location: '/images/calender.png'
    },
    {
        label: 'Technology',
        value: 'Technology',
        location: '/images/family.png'
    },
    {
        label: 'Financial services',
        value: 'Financial services',
        location: '/images/family.png'
    },
    {
        label: 'Legal',
        value: 'Legal',
        location: '/images/calender.png'
    },
    {
        label: 'Health care',
        value: 'Health care',
        location: '/images/calender.png'
    },
    {
        label: 'Government',
        value: 'Government',
        location: '/images/family.png'
    },
    {
        label: 'Medical',
        value: 'Medical',
        location: '/images/family.png'
    },
    {
        label: 'Security',
        value: 'Security',
        location: '/images/calender.png'
    },
    {
        label: 'Logistic',
        value: 'Logistic',
        location: '/images/calender.png'
    },
    {
        label: 'Robotics',
        value: 'Robotics',
        location: '/images/family.png'
    },
    {
        label: 'Automotive',
        value: 'Automotive',
        location: '/images/family.png'
    },
    {
        label: 'Transportation',
        value: 'Transportation',
        location: '/images/calender.png'
    },
    {
        label: 'Customer support',
        value: 'Customer support',
        location: '/images/calender.png'
    }
]
export {
    validation,
    UserErrors,
    genders,
    educationCompletion,
    levelOfEducation,
    finanicalSavings,
    stayTime,
    visitedOptions,
    firendsAndRelative,
    reasonToTravel,
    areaofInterest,
    industryPreferredForWork
}