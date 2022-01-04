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
                        title:"Step A heading title"
                    },
                    subHeading: {
                        title:"Step A subheading title"
                    },
                    inputInstances: [
                        {
                            label: "First Name",
                            name:"firstName",
                            placeholder: "Your Name",
                            className: "mx-auto p-4 text-blue-500",
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
            stepB: {
                mainArea: {
                    heading: {
                        title:"Step B heading title"
                    },
                    subHeading: {
                        title:"Step B subheading title"
                    },
                    inputInstances: [
                        {
                            label: "Last Name",
                            name:"lastName",
                            placeholder: "Type Your Last Name",
                            className: "mx-auto p-4 text-blue-500",
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
                        title:"Step C heading title"
                    },
                    subHeading: {
                        title:"Step C subheading title"
                    },
                    inputInstances: [
                        {
                            label: "Address",
                            name:"address",
                            placeholder: "Your Address",
                            className: "mx-auto p-4 text-blue-500",
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
            stepD: {
                mainArea: {
                    heading: {
                        title:"Step D heading title"
                    },
                    subHeading: {
                        title:"Step D subheading title"
                    },
                    inputInstances: [
                        {
                            label: "Phone",
                            name:"phone",
                            placeholder: "Type your phone",
                            className: "mx-auto p-4 text-blue-500",
                            validation: {
                                minChars: 2,
                                maxChars: 20,
                            },
                            type: "text-input",
                            offsprings: []
                        }
                    ],
                    buttons: {

                    }
                }
            },
            stepE: {
                mainArea: {
                    heading: {
                        title:"Step E heading title"
                    },
                    subHeading: {
                        title:"Step E subheading title"
                    },
                    inputInstances: [
                        {
                            label: "General",
                            name:"general",
                            placeholder: "Type General Info",
                            className: "mx-auto p-4 text-blue-500",
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
            }
    },
}