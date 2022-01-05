export const signUpConfig = {
    stepperConfig: {},
    steps: [
        {
            stepName: "stepA",
            icon: "fas fa-user-cog",
            className: ""
        },
        {
            stepName: "stepB",
            icon: "fas fa-address-card",
            className: ""
        },
        {
            stepName: "stepC",
            icon: "far fa-envelope",
            className: ""
        },
        {
            stepName: "stepD",
            icon: "fas fa-phone",
            className: ""
        },
        {
            stepName: "stepE",
            icon: "fas fa-info",
            className: ""
        },
    ],
    sections: {
            stepA: {
                mainArea: {
                    heading: {
                        title:"Heading Title"
                    },
                    subHeading: {
                        title:"subheading title"
                    },
                    inputInstances: [
                        {
                            label: "First Name",
                            name:"firstName",
                            placeholder: "Your Name",
                            className: "mx-auto p-4 text-blue-500",
                            validationType: "string",
                            id:"firstName",
                            validations: [

                                {
                                    type: "required",
                                    params: ["this field is required"]
                                },
                                {
                                    type: "min",
                                    params: [3, "first name cannot be less than 5 characters"]
                                },
                                {
                                    type: "max",
                                    params: [10, "first cannot be more than 10 characters"]
                                },
                            ],
                            // validation: {
                            //     type: "required",
                            //   minChars: 2,
                            //   maxChars: 20,
                            //   allowLanguages: ["en", "he"],
                            // },
                            type: "text-input",
                            offsprings: []
                        }
                    ],
                    buttons: {
                    }
                }
            },
            stepB: {
                mainArea: {
                    heading: {
                        title:"Heading Title"
                    },
                    subHeading: {
                        title:"subheading title"
                    },
                    inputInstances: [
                        {
                            label: "Last Name",
                            name:"lastName",
                            placeholder: "Type Your Last Name",
                            className: "mx-auto p-4 text-blue-500",
                            validationType: "string",
                            id:"lastName",
                            validations: [

                                {
                                    type: "required",
                                    params: ["this field is required"]
                                },
                                {
                                    type: "min",
                                    params: [3, "last name cannot be less than 3 characters"]
                                },
                                {
                                    type: "max",
                                    params: [10, "last cannot be more than 10 characters"]
                                }
                            ],
                            validation: {
                                minChars: 2,
                                maxChars: 20,
                                allowLanguages: ["en", "he"],
                            },
                            type: "text-input",
                            offsprings: []
                        }
                    ],
                    buttons: {

                    }
                }

            },
            stepC: {
                mainArea: {
                    heading: {
                        title:"Heading Title"
                    },
                    subHeading: {
                        title:"subheading title"
                    },
                    inputInstances: [
                        {
                            label: "Address",
                            name:"address",
                            placeholder: "Your Address",
                            className: "mx-auto p-4 text-blue-500",
                            validationType: "string",
                            id:"address",
                            validations: [

                                {
                                    type: "required",
                                    params: ["this field is required"]
                                },
                                {
                                    type: "min",
                                    params: [3, "address cannot be less than 3 characters"]
                                },
                                {
                                    type: "max",
                                    params: [10, "address cannot be more than 10 characters"]
                                },
                            ],
                            type: "text-input",
                            offsprings: []
                        }
                    ],
                    buttons: {
                    }
                }
            },
            stepD: {
                mainArea: {
                    heading: {
                        title:"Heading Title"
                    },
                    subHeading: {
                        title:"subheading title"
                    },
                    inputInstances: [
                        {
                            label: "Phone",
                            name:"phone",
                            placeholder: "Type your phone",
                            className: "mx-auto p-4 text-blue-500",
                            validationType: "string",
                            id:"phone",
                            validations: [
                                {
                                    type: "required",
                                    params: ["this field is required"]
                                },
                                {
                                    type: "min",
                                    params: [9, "phone number cannot be less than 9 characters"]
                                },
                                {
                                    type: "max",
                                    params: [10, "phone number be more than 10 characters"]
                                },
                            ],
                            type: "text-input",
                        }
                    ],
                    buttons: {

                    }
                }
            },
            stepE: {
                mainArea: {
                    heading: {
                        title:"Heading Title"
                    },
                    subHeading: {
                        title:"subheading title"
                    },
                    inputInstances: [
                        {
                            label: "Email",
                            name:"email",
                            placeholder: "Type Your Email",
                            className: "mx-auto p-4 text-blue-500",
                            validationType: "string",
                            id:"email",
                            validations: [

                                {
                                    type: "required",
                                    params: ["this field is required"]
                                },
                                {
                                    type: "email",
                                    params: ["please enter a valid email"]
                                }
                            ],
                            type: "text-input",
                            offsprings: []
                        }
                    ],
                    buttons: {
                    }
                }
            }
    },
}