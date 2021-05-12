/* * * * * * * * * * * * * * * * * * *
 *                                   *
 *      Discord Rainbow Role         *
 *        Author: 7teen              *
 *       Discord: 7teen#3868         *
 *                                   *
 * * * * * * * * * * * * * * * * * * */

// Bot & Packages
const Discord = require("discord.js");
const client = new Discord.Client({
    ws: { intents: new Discord.Intents(Discord.Intents.ALL) },
});
const chalk = require("chalk");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Settings
const settings = require("./config.json");
const token = settings.token;

client.on("ready", () => {
    client.user.setActivity({
        name: "Rainbow Role V2",
        type: "PLAYING"
    })
});



/**
 * The beginning
 */
function Main() {
    Menu().then(() => {
        readline.question("[!] Enter Option: ", answer => {
            if (answer === "1") {
                FastMode();
            } else if (answer === "2") {
                GradualMode();
            } else {
                console.log(chalk.red("Mode Error: Invalid mode on input"));
                setTimeout(() => {
                    process.exit(1);
                }, 1000);
            }
        })
    })
}

/**
 * Fast Mode
 */
function FastMode() {
    setTimeout(() => {
        readline.question("Enter Guild ID: ", (guildID) => {
            client.guilds
                .fetch(guildID)
                .then((g) => {
                    console.log(
                        chalk.yellowBright(`WARNING: Fetching Guild ID: ${guildID}`)
                    );
                    console.log(chalk.greenBright(`SUCCESS: Found Guild: ${g.name}`));
                    console.log(chalk.cyanBright(`Wait a few seconds...\n`));
                    setTimeout(() => {
                        readline.question("Do You Wish To See Roles? (Y/N) ", (answer) => {
                            if (answer === "Y") {
                                g.roles.cache.forEach((r) => {
                                    console.log(
                                        chalk.cyanBright(
                                            `role: ${r.name} ` +
                                            chalk.magentaBright(`hex: ${r.hexColor} `) +
                                            chalk.greenBright(`pos: ${r.rawPosition}`)
                                        )
                                    );
                                });
                                setTimeout(() => {
                                    readline.question(
                                        "Enter Role Name To Do Rainbow: ",
                                        (response) => {
                                            client.guilds.fetch(guildID).then((guild) => {
                                                console.log(
                                                    chalk.yellowBright(
                                                        `WARNING: Fetching Role: ${response}`
                                                    )
                                                );
                                                const ifRole = guild.roles.cache.find((roname) => roname.name === response)
                                                if (ifRole) {
                                                    console.log(chalk.red(`ERROR: Role Already Exists: ${response}`));
                                                    readline.question("Do you wish to retry? (Y/N)", answer => {
                                                        if (answer === "Y") {
                                                            setTimeout(() => {
                                                                readline.question(
                                                                    "Enter Role Name To Do Rainbow: ",
                                                                    (response) => {
                                                                        client.guilds.fetch(guildID).then((guild) => {
                                                                            console.log(
                                                                                chalk.yellowBright(
                                                                                    `WARNING: Fetching Role: ${response}`
                                                                                )
                                                                            );
                                                                            const ifRole = guild.roles.cache.find((roname) => roname.name === response)
                                                                            if (ifRole) {
                                                                                console.log(chalk.red(`ERROR: Role Already Exists: ${response}`));
                                                                                process.exit()
                                                                            } else {
                                                                                readline.question("[?] Do you wish to log the process? (Y/N) ", res => {
                                                                                    if (res === "Y") {
                                                                                        /**
                                                                                         * Make Role Rotate Color:  Rainbow
                                                                                         */
                                                                                        function FastRainbowRole(role) {
                                                                                            // Making Role below bot
                                                                                            const pos = guild.me.roles.highest.position - 2
                                                                                            role = guild.roles.create({
                                                                                                data: {
                                                                                                    name: response,
                                                                                                    color: "#f04747",
                                                                                                    position: pos,
                                                                                                }
                                                                                            }).then((r) => {
                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                                                console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                                                setInterval(() => {
                                                                                                    r.edit({
                                                                                                        // Red
                                                                                                        color: "#FF0000"
                                                                                                    }).then((ro) => {
                                                                                                        // Orange
                                                                                                        ro.edit({
                                                                                                            color: "#FFA500"
                                                                                                        }).then((ro1) => {
                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                            ro1.edit({
                                                                                                                // Yellow
                                                                                                                color: "#FFFF00"
                                                                                                            }).then((ro2) => {
                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro1.name + " COLOR CHANGED TO " + ro1.hexColor))
                                                                                                                ro2.edit({
                                                                                                                    // Green
                                                                                                                    color: "#00FF00"
                                                                                                                }).then((ro3) => {
                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro2.name + " COLOR CHANGED TO " + ro2.hexColor))
                                                                                                                    ro3.edit({
                                                                                                                        // Blue
                                                                                                                        color: "#0000FF"
                                                                                                                    }).then((ro4) => {
                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro3.name + " COLOR CHANGED TO " + ro3.hexColor))
                                                                                                                        ro4.edit({
                                                                                                                            // Purple
                                                                                                                            color: "#800080"
                                                                                                                        }).then((ro5) => {
                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro4.name + " COLOR CHANGED TO " + ro4.hexColor))
                                                                                                                            ro5.edit({
                                                                                                                                // Indigo
                                                                                                                                color: "#4B0082"
                                                                                                                            }).then((ro6) => {
                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro5.name + " COLOR CHANGED TO " + ro5.hexColor))
                                                                                                                                ro6.edit({
                                                                                                                                    // Violet
                                                                                                                                    color: "#EE82EE"
                                                                                                                                })
                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro6.name + " COLOR CHANGED TO " + ro6.hexColor))
                                                                                                                            }).catch((err) => {
                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                            })
                                                                                                                        }).catch((err) => {
                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                        })
                                                                                                                    }).catch((err) => {
                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                    })
                                                                                                                }).catch((err) => {
                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                })
                                                                                                            }).catch((err) => {
                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                            })
                                                                                                        }).catch((err) => {
                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                        })
                                                                                                    }).catch((err) => {
                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                    })
                                                                                                }, 700);
                                                                                            })
                                                                                        }
                                                                                        FastRainbowRole()
                                                                                    } else {
                                                                                        /**
                                                                                         * Make Role Rotate Color:  Rainbow
                                                                                         */
                                                                                        function FastRainbowRoleNoLog(role) {
                                                                                            // Making Role below bot
                                                                                            const pos = guild.me.roles.highest.position - 2
                                                                                            role = guild.roles.create({
                                                                                                data: {
                                                                                                    name: response,
                                                                                                    color: "#f04747",
                                                                                                    position: pos,
                                                                                                }
                                                                                            }).then((r) => {
                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                                                console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                                                setInterval(() => {
                                                                                                    r.edit({
                                                                                                        // Red
                                                                                                        color: "#FF0000"
                                                                                                    }).then((ro) => {
                                                                                                        // Orange
                                                                                                        ro.edit({
                                                                                                            color: "#FFA500"
                                                                                                        }).then((ro1) => {

                                                                                                            ro1.edit({
                                                                                                                // Yellow
                                                                                                                color: "#FFFF00"
                                                                                                            }).then((ro2) => {

                                                                                                                ro2.edit({
                                                                                                                    // Green
                                                                                                                    color: "#00FF00"
                                                                                                                }).then((ro3) => {

                                                                                                                    ro3.edit({
                                                                                                                        // Blue
                                                                                                                        color: "#0000FF"
                                                                                                                    }).then((ro4) => {

                                                                                                                        ro4.edit({
                                                                                                                            // Purple
                                                                                                                            color: "#800080"
                                                                                                                        }).then((ro5) => {

                                                                                                                            ro5.edit({
                                                                                                                                // Indigo
                                                                                                                                color: "#4B0082"
                                                                                                                            }).then((ro6) => {

                                                                                                                                ro6.edit({
                                                                                                                                    // Violet
                                                                                                                                    color: "#EE82EE"
                                                                                                                                })

                                                                                                                            }).catch((err) => {
                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                            })
                                                                                                                        }).catch((err) => {
                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                        })
                                                                                                                    }).catch((err) => {
                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                    })
                                                                                                                }).catch((err) => {
                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                })
                                                                                                            }).catch((err) => {
                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                            })
                                                                                                        }).catch((err) => {
                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                        })
                                                                                                    }).catch((err) => {
                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                    })
                                                                                                }, 700);
                                                                                            })
                                                                                        }
                                                                                        FastRainbowRoleNoLog()
                                                                                    }
                                                                                })
                                                                            }
                                                                        });
                                                                    }
                                                                );
                                                            }, 2000);
                                                        } else {
                                                            process.exit()
                                                        }
                                                    })
                                                } else {
                                                    readline.question("[?] Do you wish to log the process? (Y/N) ", res => {
                                                        if (res === "Y") {
                                                            /**
                                                             * Make Role Rotate Color:  Rainbow
                                                             */
                                                            function FastRainbowRole(role) {
                                                                // Making Role below bot
                                                                const pos = guild.me.roles.highest.position - 2
                                                                role = guild.roles.create({
                                                                    data: {
                                                                        name: response,
                                                                        color: "#f04747",
                                                                        position: pos,
                                                                    }
                                                                }).then((r) => {
                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                    console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                    setInterval(() => {
                                                                        r.edit({
                                                                            // Red
                                                                            color: "#FF0000"
                                                                        }).then((ro) => {
                                                                            // Orange
                                                                            ro.edit({
                                                                                color: "#FFA500"
                                                                            }).then((ro1) => {
                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                ro1.edit({
                                                                                    // Yellow
                                                                                    color: "#FFFF00"
                                                                                }).then((ro2) => {
                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro1.name + " COLOR CHANGED TO " + ro1.hexColor))
                                                                                    ro2.edit({
                                                                                        // Green
                                                                                        color: "#00FF00"
                                                                                    }).then((ro3) => {
                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro2.name + " COLOR CHANGED TO " + ro2.hexColor))
                                                                                        ro3.edit({
                                                                                            // Blue
                                                                                            color: "#0000FF"
                                                                                        }).then((ro4) => {
                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro3.name + " COLOR CHANGED TO " + ro3.hexColor))
                                                                                            ro4.edit({
                                                                                                // Purple
                                                                                                color: "#800080"
                                                                                            }).then((ro5) => {
                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro4.name + " COLOR CHANGED TO " + ro4.hexColor))
                                                                                                ro5.edit({
                                                                                                    // Indigo
                                                                                                    color: "#4B0082"
                                                                                                }).then((ro6) => {
                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro5.name + " COLOR CHANGED TO " + ro5.hexColor))
                                                                                                    ro6.edit({
                                                                                                        // Violet
                                                                                                        color: "#EE82EE"
                                                                                                    })
                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro6.name + " COLOR CHANGED TO " + ro6.hexColor))
                                                                                                }).catch((err) => {
                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                })
                                                                                            }).catch((err) => {
                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                            })
                                                                                        }).catch((err) => {
                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                        })
                                                                                    }).catch((err) => {
                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                    })
                                                                                }).catch((err) => {
                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                })
                                                                            }).catch((err) => {
                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                            })
                                                                        }).catch((err) => {
                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                        })
                                                                    }, 700);
                                                                })
                                                            }
                                                            FastRainbowRole()
                                                        } else {
                                                            /**
                                                             * Make Role Rotate Color:  Rainbow
                                                             */
                                                            function FastRainbowRoleNoLog(role) {
                                                                // Making Role below bot
                                                                const pos = guild.me.roles.highest.position - 2
                                                                role = guild.roles.create({
                                                                    data: {
                                                                        name: response,
                                                                        color: "#f04747",
                                                                        position: pos,
                                                                    }
                                                                }).then((r) => {
                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                    console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                    setInterval(() => {
                                                                        r.edit({
                                                                            // Red
                                                                            color: "#FF0000"
                                                                        }).then((ro) => {
                                                                            // Orange
                                                                            ro.edit({
                                                                                color: "#FFA500"
                                                                            }).then((ro1) => {

                                                                                ro1.edit({
                                                                                    // Yellow
                                                                                    color: "#FFFF00"
                                                                                }).then((ro2) => {

                                                                                    ro2.edit({
                                                                                        // Green
                                                                                        color: "#00FF00"
                                                                                    }).then((ro3) => {

                                                                                        ro3.edit({
                                                                                            // Blue
                                                                                            color: "#0000FF"
                                                                                        }).then((ro4) => {

                                                                                            ro4.edit({
                                                                                                // Purple
                                                                                                color: "#800080"
                                                                                            }).then((ro5) => {

                                                                                                ro5.edit({
                                                                                                    // Indigo
                                                                                                    color: "#4B0082"
                                                                                                }).then((ro6) => {

                                                                                                    ro6.edit({
                                                                                                        // Violet
                                                                                                        color: "#EE82EE"
                                                                                                    })

                                                                                                }).catch((err) => {
                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                })
                                                                                            }).catch((err) => {
                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                            })
                                                                                        }).catch((err) => {
                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                        })
                                                                                    }).catch((err) => {
                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                    })
                                                                                }).catch((err) => {
                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                })
                                                                            }).catch((err) => {
                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                            })
                                                                        }).catch((err) => {
                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                        })
                                                                    }, 700);
                                                                })
                                                            }
                                                            FastRainbowRoleNoLog()
                                                        }
                                                    })
                                                }
                                            });
                                        }
                                    );
                                }, 2000);
                            } else {
                                setTimeout(() => {
                                    readline.question(
                                        "Enter Role Name To Do Rainbow: ",
                                        (response) => {
                                            client.guilds.fetch(guildID).then((guild) => {
                                                console.log(
                                                    chalk.yellowBright(
                                                        `WARNING: Fetching Role: ${response}`
                                                    )
                                                );
                                                const ifRole = guild.roles.cache.find((roname) => roname.name === response)
                                                if (ifRole) {
                                                    console.log(chalk.red(`ERROR: Role Already Exists: ${response}`));
                                                    readline.question("Do you wish to retry? (Y/N)", answer => {
                                                        if (answer === "Y") {
                                                            setTimeout(() => {
                                                                readline.question(
                                                                    "Enter Role Name To Do Rainbow: ",
                                                                    (response) => {
                                                                        client.guilds.fetch(guildID).then((guild) => {
                                                                            console.log(
                                                                                chalk.yellowBright(
                                                                                    `WARNING: Fetching Role: ${response}`
                                                                                )
                                                                            );
                                                                            const ifRole = guild.roles.cache.find((roname) => roname.name === response)
                                                                            if (ifRole) {
                                                                                console.log(chalk.red(`ERROR: Role Already Exists: ${response}`));
                                                                                process.exit()
                                                                            } else {
                                                                                readline.question("[?] Do you wish to log the process? (Y/N) ", res => {
                                                                                    if (res === "Y") {
                                                                                        /**
                                                                                         * Make Role Rotate Color:  Rainbow
                                                                                         */
                                                                                        function FastRainbowRole(role) {
                                                                                            // Making Role below bot
                                                                                            const pos = guild.me.roles.highest.position - 2
                                                                                            role = guild.roles.create({
                                                                                                data: {
                                                                                                    name: response,
                                                                                                    color: "#f04747",
                                                                                                    position: pos,
                                                                                                }
                                                                                            }).then((r) => {
                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                                                console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                                                setInterval(() => {
                                                                                                    r.edit({
                                                                                                        // Red
                                                                                                        color: "#FF0000"
                                                                                                    }).then((ro) => {
                                                                                                        // Orange
                                                                                                        ro.edit({
                                                                                                            color: "#FFA500"
                                                                                                        }).then((ro1) => {
                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                            ro1.edit({
                                                                                                                // Yellow
                                                                                                                color: "#FFFF00"
                                                                                                            }).then((ro2) => {
                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro1.name + " COLOR CHANGED TO " + ro1.hexColor))
                                                                                                                ro2.edit({
                                                                                                                    // Green
                                                                                                                    color: "#00FF00"
                                                                                                                }).then((ro3) => {
                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro2.name + " COLOR CHANGED TO " + ro2.hexColor))
                                                                                                                    ro3.edit({
                                                                                                                        // Blue
                                                                                                                        color: "#0000FF"
                                                                                                                    }).then((ro4) => {
                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro3.name + " COLOR CHANGED TO " + ro3.hexColor))
                                                                                                                        ro4.edit({
                                                                                                                            // Purple
                                                                                                                            color: "#800080"
                                                                                                                        }).then((ro5) => {
                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro4.name + " COLOR CHANGED TO " + ro4.hexColor))
                                                                                                                            ro5.edit({
                                                                                                                                // Indigo
                                                                                                                                color: "#4B0082"
                                                                                                                            }).then((ro6) => {
                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro5.name + " COLOR CHANGED TO " + ro5.hexColor))
                                                                                                                                ro6.edit({
                                                                                                                                    // Violet
                                                                                                                                    color: "#EE82EE"
                                                                                                                                })
                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro6.name + " COLOR CHANGED TO " + ro6.hexColor))
                                                                                                                            }).catch((err) => {
                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                            })
                                                                                                                        }).catch((err) => {
                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                        })
                                                                                                                    }).catch((err) => {
                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                    })
                                                                                                                }).catch((err) => {
                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                })
                                                                                                            }).catch((err) => {
                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                            })
                                                                                                        }).catch((err) => {
                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                        })
                                                                                                    }).catch((err) => {
                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                    })
                                                                                                }, 700);
                                                                                            })
                                                                                        }
                                                                                        FastRainbowRole()
                                                                                    } else {
                                                                                        /**
                                                                                         * Make Role Rotate Color:  Rainbow
                                                                                         */
                                                                                        function FastRainbowRoleNoLog(role) {
                                                                                            // Making Role below bot
                                                                                            const pos = guild.me.roles.highest.position - 2
                                                                                            role = guild.roles.create({
                                                                                                data: {
                                                                                                    name: response,
                                                                                                    color: "#f04747",
                                                                                                    position: pos,
                                                                                                }
                                                                                            }).then((r) => {
                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                                                console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                                                setInterval(() => {
                                                                                                    r.edit({
                                                                                                        // Red
                                                                                                        color: "#FF0000"
                                                                                                    }).then((ro) => {
                                                                                                        // Orange
                                                                                                        ro.edit({
                                                                                                            color: "#FFA500"
                                                                                                        }).then((ro1) => {

                                                                                                            ro1.edit({
                                                                                                                // Yellow
                                                                                                                color: "#FFFF00"
                                                                                                            }).then((ro2) => {

                                                                                                                ro2.edit({
                                                                                                                    // Green
                                                                                                                    color: "#00FF00"
                                                                                                                }).then((ro3) => {

                                                                                                                    ro3.edit({
                                                                                                                        // Blue
                                                                                                                        color: "#0000FF"
                                                                                                                    }).then((ro4) => {

                                                                                                                        ro4.edit({
                                                                                                                            // Purple
                                                                                                                            color: "#800080"
                                                                                                                        }).then((ro5) => {

                                                                                                                            ro5.edit({
                                                                                                                                // Indigo
                                                                                                                                color: "#4B0082"
                                                                                                                            }).then((ro6) => {

                                                                                                                                ro6.edit({
                                                                                                                                    // Violet
                                                                                                                                    color: "#EE82EE"
                                                                                                                                })

                                                                                                                            }).catch((err) => {
                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                            })
                                                                                                                        }).catch((err) => {
                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                        })
                                                                                                                    }).catch((err) => {
                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                    })
                                                                                                                }).catch((err) => {
                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                })
                                                                                                            }).catch((err) => {
                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                            })
                                                                                                        }).catch((err) => {
                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                        })
                                                                                                    }).catch((err) => {
                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                    })
                                                                                                }, 700);
                                                                                            })
                                                                                        }
                                                                                        FastRainbowRoleNoLog()
                                                                                    }
                                                                                })
                                                                            }
                                                                        });
                                                                    }
                                                                );
                                                            }, 2000);
                                                        } else {
                                                            process.exit()
                                                        }
                                                    })
                                                } else {
                                                    readline.question("[?] Do you wish to log the process? (Y/N) ", res => {
                                                        if (res === "Y") {
                                                            /**
                                                             * Make Role Rotate Color:  Rainbow
                                                             */
                                                            function FastRainbowRole(role) {
                                                                // Making Role below bot
                                                                const pos = guild.me.roles.highest.position - 2
                                                                role = guild.roles.create({
                                                                    data: {
                                                                        name: response,
                                                                        color: "#f04747",
                                                                        position: pos,
                                                                    }
                                                                }).then((r) => {
                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                    console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                    setInterval(() => {
                                                                        r.edit({
                                                                            // Red
                                                                            color: "#FF0000"
                                                                        }).then((ro) => {
                                                                            // Orange
                                                                            ro.edit({
                                                                                color: "#FFA500"
                                                                            }).then((ro1) => {
                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                ro1.edit({
                                                                                    // Yellow
                                                                                    color: "#FFFF00"
                                                                                }).then((ro2) => {
                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro1.name + " COLOR CHANGED TO " + ro1.hexColor))
                                                                                    ro2.edit({
                                                                                        // Green
                                                                                        color: "#00FF00"
                                                                                    }).then((ro3) => {
                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro2.name + " COLOR CHANGED TO " + ro2.hexColor))
                                                                                        ro3.edit({
                                                                                            // Blue
                                                                                            color: "#0000FF"
                                                                                        }).then((ro4) => {
                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro3.name + " COLOR CHANGED TO " + ro3.hexColor))
                                                                                            ro4.edit({
                                                                                                // Purple
                                                                                                color: "#800080"
                                                                                            }).then((ro5) => {
                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro4.name + " COLOR CHANGED TO " + ro4.hexColor))
                                                                                                ro5.edit({
                                                                                                    // Indigo
                                                                                                    color: "#4B0082"
                                                                                                }).then((ro6) => {
                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro5.name + " COLOR CHANGED TO " + ro5.hexColor))
                                                                                                    ro6.edit({
                                                                                                        // Violet
                                                                                                        color: "#EE82EE"
                                                                                                    })
                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro6.name + " COLOR CHANGED TO " + ro6.hexColor))
                                                                                                }).catch((err) => {
                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                })
                                                                                            }).catch((err) => {
                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                            })
                                                                                        }).catch((err) => {
                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                        })
                                                                                    }).catch((err) => {
                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                    })
                                                                                }).catch((err) => {
                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                })
                                                                            }).catch((err) => {
                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                            })
                                                                        }).catch((err) => {
                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                        })
                                                                    }, 700);
                                                                })
                                                            }
                                                            FastRainbowRole()
                                                        } else {
                                                            /**
                                                             * Make Role Rotate Color:  Rainbow
                                                             */
                                                            function FastRainbowRoleNoLog(role) {
                                                                // Making Role below bot
                                                                const pos = guild.me.roles.highest.position - 2
                                                                role = guild.roles.create({
                                                                    data: {
                                                                        name: response,
                                                                        color: "#f04747",
                                                                        position: pos,
                                                                    }
                                                                }).then((r) => {
                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                    console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                    setInterval(() => {
                                                                        r.edit({
                                                                            // Red
                                                                            color: "#FF0000"
                                                                        }).then((ro) => {
                                                                            // Orange
                                                                            ro.edit({
                                                                                color: "#FFA500"
                                                                            }).then((ro1) => {

                                                                                ro1.edit({
                                                                                    // Yellow
                                                                                    color: "#FFFF00"
                                                                                }).then((ro2) => {

                                                                                    ro2.edit({
                                                                                        // Green
                                                                                        color: "#00FF00"
                                                                                    }).then((ro3) => {

                                                                                        ro3.edit({
                                                                                            // Blue
                                                                                            color: "#0000FF"
                                                                                        }).then((ro4) => {

                                                                                            ro4.edit({
                                                                                                // Purple
                                                                                                color: "#800080"
                                                                                            }).then((ro5) => {

                                                                                                ro5.edit({
                                                                                                    // Indigo
                                                                                                    color: "#4B0082"
                                                                                                }).then((ro6) => {

                                                                                                    ro6.edit({
                                                                                                        // Violet
                                                                                                        color: "#EE82EE"
                                                                                                    })

                                                                                                }).catch((err) => {
                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                })
                                                                                            }).catch((err) => {
                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                            })
                                                                                        }).catch((err) => {
                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                        })
                                                                                    }).catch((err) => {
                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                    })
                                                                                }).catch((err) => {
                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                })
                                                                            }).catch((err) => {
                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                            })
                                                                        }).catch((err) => {
                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                        })
                                                                    }, 700);
                                                                })
                                                            }
                                                            FastRainbowRoleNoLog()
                                                        }
                                                    })
                                                }
                                            });
                                        }
                                    );
                                }, 2000);
                            }
                        });
                    }, 3000);
                })
                .catch((err) => {
                    console.log(
                        chalk.red(`ERROR: Unable To Fetch Guild ID: ${guildID} | ` + err)
                    );
                    console.log(
                        chalk.yellowBright("WARNING: FAILURE TO CONTINUE | RESTARTING...")
                    );
                    setTimeout(() => {
                        process.exit();
                    }, 1000);
                });
        });
    }, 2000);
}

/**
 * Gradual Mode: Includes up to 24 colors
 */
function GradualMode() {
    setTimeout(() => {
        readline.question("Enter Guild ID: ", (guildID) => {
            client.guilds
                .fetch(guildID)
                .then((g) => {
                    console.log(
                        chalk.yellowBright(`WARNING: Fetching Guild ID: ${guildID}`)
                    );
                    console.log(chalk.greenBright(`SUCCESS: Found Guild: ${g.name}`));
                    console.log(chalk.cyanBright(`Wait a few seconds...\n`));
                    setTimeout(() => {
                        readline.question("Do You Wish To See Roles? (Y/N) ", (answer) => {
                            if (answer === "Y") {
                                g.roles.cache.forEach((r) => {
                                    console.log(
                                        chalk.cyanBright(
                                            `role: ${r.name} ` +
                                            chalk.magentaBright(`hex: ${r.hexColor} `) +
                                            chalk.greenBright(`pos: ${r.rawPosition}`)
                                        )
                                    );
                                });
                                setTimeout(() => {
                                    readline.question(
                                        "Enter Role Name To Do Rainbow: ",
                                        (response) => {
                                            client.guilds.fetch(guildID).then((guild) => {
                                                console.log(
                                                    chalk.yellowBright(
                                                        `WARNING: Fetching Role: ${response}`
                                                    )
                                                );
                                                const ifRole = guild.roles.cache.find((roname) => roname.name === response)
                                                if (ifRole) {
                                                    console.log(chalk.red(`ERROR: Role Already Exists: ${response}`));
                                                    readline.question("Do you wish to retry? (Y/N)", answer => {
                                                        if (answer === "Y") {
                                                            setTimeout(() => {
                                                                readline.question(
                                                                    "Enter Role Name To Do Rainbow: ",
                                                                    (response) => {
                                                                        client.guilds.fetch(guildID).then((guild) => {
                                                                            console.log(
                                                                                chalk.yellowBright(
                                                                                    `WARNING: Fetching Role: ${response}`
                                                                                )
                                                                            );
                                                                            const ifRole = guild.roles.cache.find((roname) => roname.name === response)
                                                                            if (ifRole) {
                                                                                console.log(chalk.red(`ERROR: Role Already Exists: ${response}`));
                                                                                process.exit()
                                                                            } else {
                                                                                readline.question("[?] Do you wish to log the process? (Y/N) ", res => {
                                                                                    if (res === "Y") {
                                                                                        /**
                                                                                         * Make Role Rotate Color:  Rainbow
                                                                                         */
                                                                                        function GradientMode(role) {
                                                                                            // Making Role below bot
                                                                                            const pos = guild.me.roles.highest.position - 2
                                                                                            role = guild.roles.create({
                                                                                                data: {
                                                                                                    name: response,
                                                                                                    color: "#f04747",
                                                                                                    position: pos,
                                                                                                }
                                                                                            }).then((r) => {
                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                                                console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                                                setInterval(() => {
                                                                                                    r.edit({
                                                                                                        // Red
                                                                                                        color: "#E70000"
                                                                                                    }).then((ro) => {
                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + r.name + " COLOR CHANGED TO " + r.hexColor))
                                                                                                        ro.edit({
                                                                                                            // Red
                                                                                                            color: "#FF0000"
                                                                                                        }).then((ro) => {
                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                            ro.edit({
                                                                                                                // Red
                                                                                                                color: "#FF1F00"
                                                                                                            }).then((ro) => {
                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                ro.edit({
                                                                                                                    // Orange
                                                                                                                    color: "#FF5D00"
                                                                                                                }).then((ro) => {
                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                    ro.edit({
                                                                                                                        // Orange
                                                                                                                        color: "#FF8F00"
                                                                                                                    }).then((ro) => {
                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                        ro.edit({
                                                                                                                            // Orange
                                                                                                                            color: "#FFBD00"
                                                                                                                        }).then((ro) => {
                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                            ro.edit({
                                                                                                                                // Yellow
                                                                                                                                color: "#FFF000"
                                                                                                                            }).then((ro) => {
                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                ro.edit({
                                                                                                                                    // Yellow
                                                                                                                                    color: "#F3FF00"
                                                                                                                                }).then((ro) => {
                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                    ro.edit({
                                                                                                                                        // Yellow
                                                                                                                                        color: "#E0FF00"
                                                                                                                                    }).then((ro) => {
                                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                        ro.edit({
                                                                                                                                            // Green
                                                                                                                                            color: "#80FF00"
                                                                                                                                        }).then((ro) => {
                                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                            ro.edit({
                                                                                                                                                // Green
                                                                                                                                                color: "#42FF00"
                                                                                                                                            }).then((ro) => {
                                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                ro.edit({
                                                                                                                                                    // Green
                                                                                                                                                    color: "#06FFBF"
                                                                                                                                                }).then((ro) => {
                                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                    ro.edit({
                                                                                                                                                        // Blue
                                                                                                                                                        color: "#06FFFB"
                                                                                                                                                    }).then((ro) => {
                                                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                        ro.edit({
                                                                                                                                                            // Blue
                                                                                                                                                            color: "#06D2FF"
                                                                                                                                                        }).then((ro) => {
                                                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                            ro.edit({
                                                                                                                                                                // Blue
                                                                                                                                                                color: "#067BFF"
                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                ro.edit({
                                                                                                                                                                    // Purple
                                                                                                                                                                    color: "#7B06FF"
                                                                                                                                                                }).then((ro) => {
                                                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                    ro.edit({
                                                                                                                                                                        // Purple
                                                                                                                                                                        color: "#A106FF"
                                                                                                                                                                    }).then((ro) => {
                                                                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                        ro.edit({
                                                                                                                                                                            // Purple
                                                                                                                                                                            color: "#BB06FF"
                                                                                                                                                                        }).then((ro) => {
                                                                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                            ro.edit({
                                                                                                                                                                                // Violet
                                                                                                                                                                                color: "#FF00FF"
                                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                                ro.edit({
                                                                                                                                                                                    // Violet
                                                                                                                                                                                    color: "#FF00C1"
                                                                                                                                                                                }).then((ro) => {
                                                                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                                    ro.edit({
                                                                                                                                                                                        // Violet
                                                                                                                                                                                        color: "#FF0080"
                                                                                                                                                                                    }).then((ro) => {
                                                                                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                                        ro.edit({
                                                                                                                                                                                            // Pink
                                                                                                                                                                                            color: "#FF0064"
                                                                                                                                                                                        }).then((ro) => {
                                                                                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                                            ro.edit({
                                                                                                                                                                                                // Pink
                                                                                                                                                                                                color: "#FF0023"
                                                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                                                ro.edit({
                                                                                                                                                                                                    // Pink
                                                                                                                                                                                                    color: "#FF0000"
                                                                                                                                                                                                })
                                                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                            })
                                                                                                                                                                                        }).catch((err) => {
                                                                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                        })
                                                                                                                                                                                    }).catch((err) => {
                                                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                    })
                                                                                                                                                                                }).catch((err) => {
                                                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                })
                                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                            })
                                                                                                                                                                        })
                                                                                                                                                                    }).catch((err) => {
                                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                    })
                                                                                                                                                                }).catch((err) => {
                                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                })
                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                            })
                                                                                                                                                        }).catch((err) => {
                                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                        })
                                                                                                                                                    }).catch((err) => {
                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                    })
                                                                                                                                                }).catch((err) => {
                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                })
                                                                                                                                            }).catch((err) => {
                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                            })
                                                                                                                                        }).catch((err) => {
                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                        })
                                                                                                                                    }).catch((err) => {
                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                    })
                                                                                                                                }).catch((err) => {
                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                })
                                                                                                                            }).catch((err) => {
                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                            })
                                                                                                                        }).catch((err) => {
                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                        })
                                                                                                                    }).catch((err) => {
                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                    })
                                                                                                                }).catch((err) => {
                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                })
                                                                                                            }).catch((err) => {
                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                            })
                                                                                                        }).catch((err) => {
                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                        })
                                                                                                    }).catch((err) => {
                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                    })
                                                                                                }, 5000);
                                                                                            })
                                                                                        }
                                                                                        GradientMode()
                                                                                    } else {
                                                                                        /**
                                                                                         * Make Role Rotate Color:  Rainbow
                                                                                         */
                                                                                        function GradientModeNoLog(role) {
                                                                                            // Making Role below bot
                                                                                            const pos = guild.me.roles.highest.position - 2
                                                                                            role = guild.roles.create({
                                                                                                data: {
                                                                                                    name: response,
                                                                                                    color: "#f04747",
                                                                                                    position: pos,
                                                                                                }
                                                                                            }).then((r) => {
                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                                                console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                                                setInterval(() => {
                                                                                                    r.edit({
                                                                                                        // Red
                                                                                                        color: "#E70000"
                                                                                                    }).then((ro) => {
                                                                                                        ro.edit({
                                                                                                            // Red
                                                                                                            color: "#FF0000"
                                                                                                        }).then((ro) => {
                                                                                                            ro.edit({
                                                                                                                // Red
                                                                                                                color: "#FF1F00"
                                                                                                            }).then((ro) => {
                                                                                                                ro.edit({
                                                                                                                    // Orange
                                                                                                                    color: "#FF5D00"
                                                                                                                }).then((ro) => {
                                                                                                                    ro.edit({
                                                                                                                        // Orange
                                                                                                                        color: "#FF8F00"
                                                                                                                    }).then((ro) => {
                                                                                                                        ro.edit({
                                                                                                                            // Orange
                                                                                                                            color: "#FFBD00"
                                                                                                                        }).then((ro) => {
                                                                                                                            ro.edit({
                                                                                                                                // Yellow
                                                                                                                                color: "#FFF000"
                                                                                                                            }).then((ro) => {
                                                                                                                                ro.edit({
                                                                                                                                    // Yellow
                                                                                                                                    color: "#F3FF00"
                                                                                                                                }).then((ro) => {
                                                                                                                                    ro.edit({
                                                                                                                                        // Yellow
                                                                                                                                        color: "#E0FF00"
                                                                                                                                    }).then((ro) => {
                                                                                                                                        ro.edit({
                                                                                                                                            // Green
                                                                                                                                            color: "#80FF00"
                                                                                                                                        }).then((ro) => {
                                                                                                                                            ro.edit({
                                                                                                                                                // Green
                                                                                                                                                color: "#42FF00"
                                                                                                                                            }).then((ro) => {
                                                                                                                                                ro.edit({
                                                                                                                                                    // Green
                                                                                                                                                    color: "#06FFBF"
                                                                                                                                                }).then((ro) => {
                                                                                                                                                    ro.edit({
                                                                                                                                                        // Blue
                                                                                                                                                        color: "#06FFFB"
                                                                                                                                                    }).then((ro) => {
                                                                                                                                                        ro.edit({
                                                                                                                                                            // Blue
                                                                                                                                                            color: "#06D2FF"
                                                                                                                                                        }).then((ro) => {
                                                                                                                                                            ro.edit({
                                                                                                                                                                // Blue
                                                                                                                                                                color: "#067BFF"
                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                ro.edit({
                                                                                                                                                                    // Purple
                                                                                                                                                                    color: "#7B06FF"
                                                                                                                                                                }).then((ro) => {
                                                                                                                                                                    ro.edit({
                                                                                                                                                                        // Purple
                                                                                                                                                                        color: "#A106FF"
                                                                                                                                                                    }).then((ro) => {
                                                                                                                                                                        ro.edit({
                                                                                                                                                                            // Purple
                                                                                                                                                                            color: "#BB06FF"
                                                                                                                                                                        }).then((ro) => {
                                                                                                                                                                            ro.edit({
                                                                                                                                                                                // Violet
                                                                                                                                                                                color: "#FF00FF"
                                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                                ro.edit({
                                                                                                                                                                                    // Violet
                                                                                                                                                                                    color: "#FF00C1"
                                                                                                                                                                                }).then((ro) => {
                                                                                                                                                                                    ro.edit({
                                                                                                                                                                                        // Violet
                                                                                                                                                                                        color: "#FF0080"
                                                                                                                                                                                    }).then((ro) => {
                                                                                                                                                                                        ro.edit({
                                                                                                                                                                                            // Pink
                                                                                                                                                                                            color: "#FF0064"
                                                                                                                                                                                        }).then((ro) => {
                                                                                                                                                                                            ro.edit({
                                                                                                                                                                                                // Pink
                                                                                                                                                                                                color: "#FF0023"
                                                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                                                ro.edit({
                                                                                                                                                                                                    // Pink
                                                                                                                                                                                                    color: "#FF0000"
                                                                                                                                                                                                })
                                                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                            })
                                                                                                                                                                                        }).catch((err) => {
                                                                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                        })
                                                                                                                                                                                    }).catch((err) => {
                                                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                    })
                                                                                                                                                                                }).catch((err) => {
                                                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                })
                                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                            })
                                                                                                                                                                        })
                                                                                                                                                                    }).catch((err) => {
                                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                    })
                                                                                                                                                                }).catch((err) => {
                                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                })
                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                            })
                                                                                                                                                        }).catch((err) => {
                                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                        })
                                                                                                                                                    }).catch((err) => {
                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                    })
                                                                                                                                                }).catch((err) => {
                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                })
                                                                                                                                            }).catch((err) => {
                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                            })
                                                                                                                                        }).catch((err) => {
                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                        })
                                                                                                                                    }).catch((err) => {
                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                    })
                                                                                                                                }).catch((err) => {
                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                })
                                                                                                                            }).catch((err) => {
                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                            })
                                                                                                                        }).catch((err) => {
                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                        })
                                                                                                                    }).catch((err) => {
                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                    })
                                                                                                                }).catch((err) => {
                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                })
                                                                                                            }).catch((err) => {
                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                            })
                                                                                                        }).catch((err) => {
                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                        })
                                                                                                    }).catch((err) => {
                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                    })
                                                                                                }, 2000);
                                                                                            })
                                                                                        }
                                                                                        GradientModeNoLog()
                                                                                    }
                                                                                })
                                                                            }
                                                                        });
                                                                    }
                                                                );
                                                            }, 2000);
                                                        } else {
                                                            process.exit()
                                                        }
                                                    })
                                                } else {
                                                    readline.question("[?] Do you wish to log the process? (Y/N) ", res => {
                                                        if (res === "Y") {
                                                            /**
                                                            * Make Role Rotate Color:  Rainbow
                                                            */
                                                            function GradientMode(role) {
                                                                // Making Role below bot
                                                                const pos = guild.me.roles.highest.position - 2
                                                                role = guild.roles.create({
                                                                    data: {
                                                                        name: response,
                                                                        color: "#f04747",
                                                                        position: pos,
                                                                    }
                                                                }).then((r) => {
                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                    console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                    setInterval(() => {
                                                                        r.edit({
                                                                            // Red
                                                                            color: "#E70000"
                                                                        }).then((ro) => {
                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + r.name + " COLOR CHANGED TO " + r.hexColor))
                                                                            ro.edit({
                                                                                // Red
                                                                                color: "#FF0000"
                                                                            }).then((ro) => {
                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                ro.edit({
                                                                                    // Red
                                                                                    color: "#FF1F00"
                                                                                }).then((ro) => {
                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                    ro.edit({
                                                                                        // Orange
                                                                                        color: "#FF5D00"
                                                                                    }).then((ro) => {
                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                        ro.edit({
                                                                                            // Orange
                                                                                            color: "#FF8F00"
                                                                                        }).then((ro) => {
                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                            ro.edit({
                                                                                                // Orange
                                                                                                color: "#FFBD00"
                                                                                            }).then((ro) => {
                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                ro.edit({
                                                                                                    // Yellow
                                                                                                    color: "#FFF000"
                                                                                                }).then((ro) => {
                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                    ro.edit({
                                                                                                        // Yellow
                                                                                                        color: "#F3FF00"
                                                                                                    }).then((ro) => {
                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                        ro.edit({
                                                                                                            // Yellow
                                                                                                            color: "#E0FF00"
                                                                                                        }).then((ro) => {
                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                            ro.edit({
                                                                                                                // Green
                                                                                                                color: "#80FF00"
                                                                                                            }).then((ro) => {
                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                ro.edit({
                                                                                                                    // Green
                                                                                                                    color: "#42FF00"
                                                                                                                }).then((ro) => {
                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                    ro.edit({
                                                                                                                        // Green
                                                                                                                        color: "#06FFBF"
                                                                                                                    }).then((ro) => {
                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                        ro.edit({
                                                                                                                            // Blue
                                                                                                                            color: "#06FFFB"
                                                                                                                        }).then((ro) => {
                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                            ro.edit({
                                                                                                                                // Blue
                                                                                                                                color: "#06D2FF"
                                                                                                                            }).then((ro) => {
                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                ro.edit({
                                                                                                                                    // Blue
                                                                                                                                    color: "#067BFF"
                                                                                                                                }).then((ro) => {
                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                    ro.edit({
                                                                                                                                        // Purple
                                                                                                                                        color: "#7B06FF"
                                                                                                                                    }).then((ro) => {
                                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                        ro.edit({
                                                                                                                                            // Purple
                                                                                                                                            color: "#A106FF"
                                                                                                                                        }).then((ro) => {
                                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                            ro.edit({
                                                                                                                                                // Purple
                                                                                                                                                color: "#BB06FF"
                                                                                                                                            }).then((ro) => {
                                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                ro.edit({
                                                                                                                                                    // Violet
                                                                                                                                                    color: "#FF00FF"
                                                                                                                                                }).then((ro) => {
                                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                    ro.edit({
                                                                                                                                                        // Violet
                                                                                                                                                        color: "#FF00C1"
                                                                                                                                                    }).then((ro) => {
                                                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                        ro.edit({
                                                                                                                                                            // Violet
                                                                                                                                                            color: "#FF0080"
                                                                                                                                                        }).then((ro) => {
                                                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                            ro.edit({
                                                                                                                                                                // Pink
                                                                                                                                                                color: "#FF0064"
                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                ro.edit({
                                                                                                                                                                    // Pink
                                                                                                                                                                    color: "#FF0023"
                                                                                                                                                                }).then((ro) => {
                                                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                    ro.edit({
                                                                                                                                                                        // Pink
                                                                                                                                                                        color: "#FF0000"
                                                                                                                                                                    })
                                                                                                                                                                }).catch((err) => {
                                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                })
                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                            })
                                                                                                                                                        }).catch((err) => {
                                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                        })
                                                                                                                                                    }).catch((err) => {
                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                    })
                                                                                                                                                }).catch((err) => {
                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        }).catch((err) => {
                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                        })
                                                                                                                                    }).catch((err) => {
                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                    })
                                                                                                                                }).catch((err) => {
                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                })
                                                                                                                            }).catch((err) => {
                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                            })
                                                                                                                        }).catch((err) => {
                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                        })
                                                                                                                    }).catch((err) => {
                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                    })
                                                                                                                }).catch((err) => {
                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                })
                                                                                                            }).catch((err) => {
                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                            })
                                                                                                        }).catch((err) => {
                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                        })
                                                                                                    }).catch((err) => {
                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                    })
                                                                                                }).catch((err) => {
                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                })
                                                                                            }).catch((err) => {
                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                            })
                                                                                        }).catch((err) => {
                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                        })
                                                                                    }).catch((err) => {
                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                    })
                                                                                }).catch((err) => {
                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                })
                                                                            }).catch((err) => {
                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                            })
                                                                        }).catch((err) => {
                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                        })
                                                                    }, 5000);
                                                                })
                                                            }
                                                            GradientMode()
                                                        } else {
                                                            /**
                                                             * Make Role Rotate Color:  Rainbow
                                                             */
                                                            function GradientModeNoLog(role) {
                                                                // Making Role below bot
                                                                const pos = guild.me.roles.highest.position - 2
                                                                role = guild.roles.create({
                                                                    data: {
                                                                        name: response,
                                                                        color: "#f04747",
                                                                        position: pos,
                                                                    }
                                                                }).then((r) => {
                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                    console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                    setInterval(() => {
                                                                        r.edit({
                                                                            // Red
                                                                            color: "#E70000"
                                                                        }).then((ro) => {
                                                                            ro.edit({
                                                                                // Red
                                                                                color: "#FF0000"
                                                                            }).then((ro) => {
                                                                                ro.edit({
                                                                                    // Red
                                                                                    color: "#FF1F00"
                                                                                }).then((ro) => {
                                                                                    ro.edit({
                                                                                        // Orange
                                                                                        color: "#FF5D00"
                                                                                    }).then((ro) => {
                                                                                        ro.edit({
                                                                                            // Orange
                                                                                            color: "#FF8F00"
                                                                                        }).then((ro) => {
                                                                                            ro.edit({
                                                                                                // Orange
                                                                                                color: "#FFBD00"
                                                                                            }).then((ro) => {
                                                                                                ro.edit({
                                                                                                    // Yellow
                                                                                                    color: "#FFF000"
                                                                                                }).then((ro) => {
                                                                                                    ro.edit({
                                                                                                        // Yellow
                                                                                                        color: "#F3FF00"
                                                                                                    }).then((ro) => {
                                                                                                        ro.edit({
                                                                                                            // Yellow
                                                                                                            color: "#E0FF00"
                                                                                                        }).then((ro) => {
                                                                                                            ro.edit({
                                                                                                                // Green
                                                                                                                color: "#80FF00"
                                                                                                            }).then((ro) => {
                                                                                                                ro.edit({
                                                                                                                    // Green
                                                                                                                    color: "#42FF00"
                                                                                                                }).then((ro) => {
                                                                                                                    ro.edit({
                                                                                                                        // Green
                                                                                                                        color: "#06FFBF"
                                                                                                                    }).then((ro) => {
                                                                                                                        ro.edit({
                                                                                                                            // Blue
                                                                                                                            color: "#06FFFB"
                                                                                                                        }).then((ro) => {
                                                                                                                            ro.edit({
                                                                                                                                // Blue
                                                                                                                                color: "#06D2FF"
                                                                                                                            }).then((ro) => {
                                                                                                                                ro.edit({
                                                                                                                                    // Blue
                                                                                                                                    color: "#067BFF"
                                                                                                                                }).then((ro) => {
                                                                                                                                    ro.edit({
                                                                                                                                        // Purple
                                                                                                                                        color: "#7B06FF"
                                                                                                                                    }).then((ro) => {
                                                                                                                                        ro.edit({
                                                                                                                                            // Purple
                                                                                                                                            color: "#A106FF"
                                                                                                                                        }).then((ro) => {
                                                                                                                                            ro.edit({
                                                                                                                                                // Purple
                                                                                                                                                color: "#BB06FF"
                                                                                                                                            }).then((ro) => {
                                                                                                                                                ro.edit({
                                                                                                                                                    // Violet
                                                                                                                                                    color: "#FF00FF"
                                                                                                                                                }).then((ro) => {
                                                                                                                                                    ro.edit({
                                                                                                                                                        // Violet
                                                                                                                                                        color: "#FF00C1"
                                                                                                                                                    }).then((ro) => {
                                                                                                                                                        ro.edit({
                                                                                                                                                            // Violet
                                                                                                                                                            color: "#FF0080"
                                                                                                                                                        }).then((ro) => {
                                                                                                                                                            ro.edit({
                                                                                                                                                                // Pink
                                                                                                                                                                color: "#FF0064"
                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                ro.edit({
                                                                                                                                                                    // Pink
                                                                                                                                                                    color: "#FF0023"
                                                                                                                                                                }).then((ro) => {
                                                                                                                                                                    ro.edit({
                                                                                                                                                                        // Pink
                                                                                                                                                                        color: "#FF0000"
                                                                                                                                                                    })
                                                                                                                                                                }).catch((err) => {
                                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                })
                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                            })
                                                                                                                                                        }).catch((err) => {
                                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                        })
                                                                                                                                                    }).catch((err) => {
                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                    })
                                                                                                                                                }).catch((err) => {
                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        }).catch((err) => {
                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                        })
                                                                                                                                    }).catch((err) => {
                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                    })
                                                                                                                                }).catch((err) => {
                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                })
                                                                                                                            }).catch((err) => {
                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                            })
                                                                                                                        }).catch((err) => {
                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                        })
                                                                                                                    }).catch((err) => {
                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                    })
                                                                                                                }).catch((err) => {
                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                })
                                                                                                            }).catch((err) => {
                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                            })
                                                                                                        }).catch((err) => {
                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                        })
                                                                                                    }).catch((err) => {
                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                    })
                                                                                                }).catch((err) => {
                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                })
                                                                                            }).catch((err) => {
                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                            })
                                                                                        }).catch((err) => {
                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                        })
                                                                                    }).catch((err) => {
                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                    })
                                                                                }).catch((err) => {
                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                })
                                                                            }).catch((err) => {
                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                            })
                                                                        }).catch((err) => {
                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                        })
                                                                    }, 5000);
                                                                })
                                                            }
                                                            GradientModeNoLog()
                                                        }
                                                    })
                                                }
                                            });
                                        }
                                    );
                                }, 2000);
                            } else {
                                setTimeout(() => {
                                    readline.question(
                                        "Enter Role Name To Do Rainbow: ",
                                        (response) => {
                                            client.guilds.fetch(guildID).then((guild) => {
                                                console.log(
                                                    chalk.yellowBright(
                                                        `WARNING: Fetching Role: ${response}`
                                                    )
                                                );
                                                const ifRole = guild.roles.cache.find((roname) => roname.name === response)
                                                if (ifRole) {
                                                    console.log(chalk.red(`ERROR: Role Already Exists: ${response}`));
                                                    readline.question("Do you wish to retry? (Y/N)", answer => {
                                                        if (answer === "Y") {
                                                            setTimeout(() => {
                                                                readline.question(
                                                                    "Enter Role Name To Do Rainbow: ",
                                                                    (response) => {
                                                                        client.guilds.fetch(guildID).then((guild) => {
                                                                            console.log(
                                                                                chalk.yellowBright(
                                                                                    `WARNING: Fetching Role: ${response}`
                                                                                )
                                                                            );
                                                                            const ifRole = guild.roles.cache.find((roname) => roname.name === response)
                                                                            if (ifRole) {
                                                                                console.log(chalk.red(`ERROR: Role Already Exists: ${response}`));
                                                                                process.exit()
                                                                            } else {
                                                                                readline.question("[?] Do you wish to log the process? (Y/N) ", res => {
                                                                                    if (res === "Y") {
                                                                                        /**
                                                                                         * Make Role Rotate Color:  Rainbow
                                                                                         */
                                                                                        function GradientMode(role) {
                                                                                            // Making Role below bot
                                                                                            const pos = guild.me.roles.highest.position - 2
                                                                                            role = guild.roles.create({
                                                                                                data: {
                                                                                                    name: response,
                                                                                                    color: "#f04747",
                                                                                                    position: pos,
                                                                                                }
                                                                                            }).then((r) => {
                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                                                console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                                                setInterval(() => {
                                                                                                    r.edit({
                                                                                                        // Red
                                                                                                        color: "#E70000"
                                                                                                    }).then((ro) => {
                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + r.name + " COLOR CHANGED TO " + r.hexColor))
                                                                                                        ro.edit({
                                                                                                            // Red
                                                                                                            color: "#FF0000"
                                                                                                        }).then((ro) => {
                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                            ro.edit({
                                                                                                                // Red
                                                                                                                color: "#FF1F00"
                                                                                                            }).then((ro) => {
                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                ro.edit({
                                                                                                                    // Orange
                                                                                                                    color: "#FF5D00"
                                                                                                                }).then((ro) => {
                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                    ro.edit({
                                                                                                                        // Orange
                                                                                                                        color: "#FF8F00"
                                                                                                                    }).then((ro) => {
                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                        ro.edit({
                                                                                                                            // Orange
                                                                                                                            color: "#FFBD00"
                                                                                                                        }).then((ro) => {
                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                            ro.edit({
                                                                                                                                // Yellow
                                                                                                                                color: "#FFF000"
                                                                                                                            }).then((ro) => {
                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                ro.edit({
                                                                                                                                    // Yellow
                                                                                                                                    color: "#F3FF00"
                                                                                                                                }).then((ro) => {
                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                    ro.edit({
                                                                                                                                        // Yellow
                                                                                                                                        color: "#E0FF00"
                                                                                                                                    }).then((ro) => {
                                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                        ro.edit({
                                                                                                                                            // Green
                                                                                                                                            color: "#80FF00"
                                                                                                                                        }).then((ro) => {
                                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                            ro.edit({
                                                                                                                                                // Green
                                                                                                                                                color: "#42FF00"
                                                                                                                                            }).then((ro) => {
                                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                ro.edit({
                                                                                                                                                    // Green
                                                                                                                                                    color: "#06FFBF"
                                                                                                                                                }).then((ro) => {
                                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                    ro.edit({
                                                                                                                                                        // Blue
                                                                                                                                                        color: "#06FFFB"
                                                                                                                                                    }).then((ro) => {
                                                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                        ro.edit({
                                                                                                                                                            // Blue
                                                                                                                                                            color: "#06D2FF"
                                                                                                                                                        }).then((ro) => {
                                                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                            ro.edit({
                                                                                                                                                                // Blue
                                                                                                                                                                color: "#067BFF"
                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                ro.edit({
                                                                                                                                                                    // Purple
                                                                                                                                                                    color: "#7B06FF"
                                                                                                                                                                }).then((ro) => {
                                                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                    ro.edit({
                                                                                                                                                                        // Purple
                                                                                                                                                                        color: "#A106FF"
                                                                                                                                                                    }).then((ro) => {
                                                                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                        ro.edit({
                                                                                                                                                                            // Purple
                                                                                                                                                                            color: "#BB06FF"
                                                                                                                                                                        }).then((ro) => {
                                                                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                            ro.edit({
                                                                                                                                                                                // Violet
                                                                                                                                                                                color: "#FF00FF"
                                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                                ro.edit({
                                                                                                                                                                                    // Violet
                                                                                                                                                                                    color: "#FF00C1"
                                                                                                                                                                                }).then((ro) => {
                                                                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                                    ro.edit({
                                                                                                                                                                                        // Violet
                                                                                                                                                                                        color: "#FF0080"
                                                                                                                                                                                    }).then((ro) => {
                                                                                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                                        ro.edit({
                                                                                                                                                                                            // Pink
                                                                                                                                                                                            color: "#FF0064"
                                                                                                                                                                                        }).then((ro) => {
                                                                                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                                            ro.edit({
                                                                                                                                                                                                // Pink
                                                                                                                                                                                                color: "#FF0023"
                                                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                                                ro.edit({
                                                                                                                                                                                                    // Pink
                                                                                                                                                                                                    color: "#FF0000"
                                                                                                                                                                                                })
                                                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                            })
                                                                                                                                                                                        }).catch((err) => {
                                                                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                        })
                                                                                                                                                                                    }).catch((err) => {
                                                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                    })
                                                                                                                                                                                }).catch((err) => {
                                                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                })
                                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                            })
                                                                                                                                                                        })
                                                                                                                                                                    }).catch((err) => {
                                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                    })
                                                                                                                                                                }).catch((err) => {
                                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                })
                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                            })
                                                                                                                                                        }).catch((err) => {
                                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                        })
                                                                                                                                                    }).catch((err) => {
                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                    })
                                                                                                                                                }).catch((err) => {
                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                })
                                                                                                                                            }).catch((err) => {
                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                            })
                                                                                                                                        }).catch((err) => {
                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                        })
                                                                                                                                    }).catch((err) => {
                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                    })
                                                                                                                                }).catch((err) => {
                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                })
                                                                                                                            }).catch((err) => {
                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                            })
                                                                                                                        }).catch((err) => {
                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                        })
                                                                                                                    }).catch((err) => {
                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                    })
                                                                                                                }).catch((err) => {
                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                })
                                                                                                            }).catch((err) => {
                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                            })
                                                                                                        }).catch((err) => {
                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                        })
                                                                                                    }).catch((err) => {
                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                    })
                                                                                                }, 5000);
                                                                                            })
                                                                                        }
                                                                                        GradientMode()
                                                                                    } else {
                                                                                        /**
                                                                                         * Make Role Rotate Color:  Rainbow
                                                                                         */
                                                                                        function GradientModeNoLog(role) {
                                                                                            // Making Role below bot
                                                                                            const pos = guild.me.roles.highest.position - 2
                                                                                            role = guild.roles.create({
                                                                                                data: {
                                                                                                    name: response,
                                                                                                    color: "#f04747",
                                                                                                    position: pos,
                                                                                                }
                                                                                            }).then((r) => {
                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                                                console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                                                setInterval(() => {
                                                                                                    r.edit({
                                                                                                        // Red
                                                                                                        color: "#E70000"
                                                                                                    }).then((ro) => {
                                                                                                        ro.edit({
                                                                                                            // Red
                                                                                                            color: "#FF0000"
                                                                                                        }).then((ro) => {
                                                                                                            ro.edit({
                                                                                                                // Red
                                                                                                                color: "#FF1F00"
                                                                                                            }).then((ro) => {
                                                                                                                ro.edit({
                                                                                                                    // Orange
                                                                                                                    color: "#FF5D00"
                                                                                                                }).then((ro) => {
                                                                                                                    ro.edit({
                                                                                                                        // Orange
                                                                                                                        color: "#FF8F00"
                                                                                                                    }).then((ro) => {
                                                                                                                        ro.edit({
                                                                                                                            // Orange
                                                                                                                            color: "#FFBD00"
                                                                                                                        }).then((ro) => {
                                                                                                                            ro.edit({
                                                                                                                                // Yellow
                                                                                                                                color: "#FFF000"
                                                                                                                            }).then((ro) => {
                                                                                                                                ro.edit({
                                                                                                                                    // Yellow
                                                                                                                                    color: "#F3FF00"
                                                                                                                                }).then((ro) => {
                                                                                                                                    ro.edit({
                                                                                                                                        // Yellow
                                                                                                                                        color: "#E0FF00"
                                                                                                                                    }).then((ro) => {
                                                                                                                                        ro.edit({
                                                                                                                                            // Green
                                                                                                                                            color: "#80FF00"
                                                                                                                                        }).then((ro) => {
                                                                                                                                            ro.edit({
                                                                                                                                                // Green
                                                                                                                                                color: "#42FF00"
                                                                                                                                            }).then((ro) => {
                                                                                                                                                ro.edit({
                                                                                                                                                    // Green
                                                                                                                                                    color: "#06FFBF"
                                                                                                                                                }).then((ro) => {
                                                                                                                                                    ro.edit({
                                                                                                                                                        // Blue
                                                                                                                                                        color: "#06FFFB"
                                                                                                                                                    }).then((ro) => {
                                                                                                                                                        ro.edit({
                                                                                                                                                            // Blue
                                                                                                                                                            color: "#06D2FF"
                                                                                                                                                        }).then((ro) => {
                                                                                                                                                            ro.edit({
                                                                                                                                                                // Blue
                                                                                                                                                                color: "#067BFF"
                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                ro.edit({
                                                                                                                                                                    // Purple
                                                                                                                                                                    color: "#7B06FF"
                                                                                                                                                                }).then((ro) => {
                                                                                                                                                                    ro.edit({
                                                                                                                                                                        // Purple
                                                                                                                                                                        color: "#A106FF"
                                                                                                                                                                    }).then((ro) => {
                                                                                                                                                                        ro.edit({
                                                                                                                                                                            // Purple
                                                                                                                                                                            color: "#BB06FF"
                                                                                                                                                                        }).then((ro) => {
                                                                                                                                                                            ro.edit({
                                                                                                                                                                                // Violet
                                                                                                                                                                                color: "#FF00FF"
                                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                                ro.edit({
                                                                                                                                                                                    // Violet
                                                                                                                                                                                    color: "#FF00C1"
                                                                                                                                                                                }).then((ro) => {
                                                                                                                                                                                    ro.edit({
                                                                                                                                                                                        // Violet
                                                                                                                                                                                        color: "#FF0080"
                                                                                                                                                                                    }).then((ro) => {
                                                                                                                                                                                        ro.edit({
                                                                                                                                                                                            // Pink
                                                                                                                                                                                            color: "#FF0064"
                                                                                                                                                                                        }).then((ro) => {
                                                                                                                                                                                            ro.edit({
                                                                                                                                                                                                // Pink
                                                                                                                                                                                                color: "#FF0023"
                                                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                                                ro.edit({
                                                                                                                                                                                                    // Pink
                                                                                                                                                                                                    color: "#FF0000"
                                                                                                                                                                                                })
                                                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                            })
                                                                                                                                                                                        }).catch((err) => {
                                                                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                        })
                                                                                                                                                                                    }).catch((err) => {
                                                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                    })
                                                                                                                                                                                }).catch((err) => {
                                                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                                })
                                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                            })
                                                                                                                                                                        })
                                                                                                                                                                    }).catch((err) => {
                                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                    })
                                                                                                                                                                }).catch((err) => {
                                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                })
                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                            })
                                                                                                                                                        }).catch((err) => {
                                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                        })
                                                                                                                                                    }).catch((err) => {
                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                    })
                                                                                                                                                }).catch((err) => {
                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                })
                                                                                                                                            }).catch((err) => {
                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                            })
                                                                                                                                        }).catch((err) => {
                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                        })
                                                                                                                                    }).catch((err) => {
                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                    })
                                                                                                                                }).catch((err) => {
                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                })
                                                                                                                            }).catch((err) => {
                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                            })
                                                                                                                        }).catch((err) => {
                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                        })
                                                                                                                    }).catch((err) => {
                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                    })
                                                                                                                }).catch((err) => {
                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                })
                                                                                                            }).catch((err) => {
                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                            })
                                                                                                        }).catch((err) => {
                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                        })
                                                                                                    }).catch((err) => {
                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                    })
                                                                                                }, 5000);
                                                                                            })
                                                                                        }
                                                                                        GradientModeNoLog()
                                                                                    }
                                                                                })
                                                                            }
                                                                        });
                                                                    }
                                                                );
                                                            }, 2000);
                                                        } else {
                                                            process.exit()
                                                        }
                                                    })
                                                } else {
                                                    readline.question("[?] Do you wish to log the process? (Y/N) ", res => {
                                                        if (res === "Y") {/**
                                                            * Make Role Rotate Color:  Rainbow
                                                            */
                                                            function GradientMode(role) {
                                                                // Making Role below bot
                                                                const pos = guild.me.roles.highest.position - 2
                                                                role = guild.roles.create({
                                                                    data: {
                                                                        name: response,
                                                                        color: "#f04747",
                                                                        position: pos,
                                                                    }
                                                                }).then((r) => {
                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                    console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                    setInterval(() => {
                                                                        r.edit({
                                                                            // Red
                                                                            color: "#E70000"
                                                                        }).then((ro) => {
                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + r.name + " COLOR CHANGED TO " + r.hexColor))
                                                                            ro.edit({
                                                                                // Red
                                                                                color: "#FF0000"
                                                                            }).then((ro) => {
                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                ro.edit({
                                                                                    // Red
                                                                                    color: "#FF1F00"
                                                                                }).then((ro) => {
                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                    ro.edit({
                                                                                        // Orange
                                                                                        color: "#FF5D00"
                                                                                    }).then((ro) => {
                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                        ro.edit({
                                                                                            // Orange
                                                                                            color: "#FF8F00"
                                                                                        }).then((ro) => {
                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                            ro.edit({
                                                                                                // Orange
                                                                                                color: "#FFBD00"
                                                                                            }).then((ro) => {
                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                ro.edit({
                                                                                                    // Yellow
                                                                                                    color: "#FFF000"
                                                                                                }).then((ro) => {
                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                    ro.edit({
                                                                                                        // Yellow
                                                                                                        color: "#F3FF00"
                                                                                                    }).then((ro) => {
                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                        ro.edit({
                                                                                                            // Yellow
                                                                                                            color: "#E0FF00"
                                                                                                        }).then((ro) => {
                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                            ro.edit({
                                                                                                                // Green
                                                                                                                color: "#80FF00"
                                                                                                            }).then((ro) => {
                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                ro.edit({
                                                                                                                    // Green
                                                                                                                    color: "#42FF00"
                                                                                                                }).then((ro) => {
                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                    ro.edit({
                                                                                                                        // Green
                                                                                                                        color: "#06FFBF"
                                                                                                                    }).then((ro) => {
                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                        ro.edit({
                                                                                                                            // Blue
                                                                                                                            color: "#06FFFB"
                                                                                                                        }).then((ro) => {
                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                            ro.edit({
                                                                                                                                // Blue
                                                                                                                                color: "#06D2FF"
                                                                                                                            }).then((ro) => {
                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                ro.edit({
                                                                                                                                    // Blue
                                                                                                                                    color: "#067BFF"
                                                                                                                                }).then((ro) => {
                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                    ro.edit({
                                                                                                                                        // Purple
                                                                                                                                        color: "#7B06FF"
                                                                                                                                    }).then((ro) => {
                                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                        ro.edit({
                                                                                                                                            // Purple
                                                                                                                                            color: "#A106FF"
                                                                                                                                        }).then((ro) => {
                                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                            ro.edit({
                                                                                                                                                // Purple
                                                                                                                                                color: "#BB06FF"
                                                                                                                                            }).then((ro) => {
                                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                ro.edit({
                                                                                                                                                    // Violet
                                                                                                                                                    color: "#FF00FF"
                                                                                                                                                }).then((ro) => {
                                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                    ro.edit({
                                                                                                                                                        // Violet
                                                                                                                                                        color: "#FF00C1"
                                                                                                                                                    }).then((ro) => {
                                                                                                                                                        console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                        ro.edit({
                                                                                                                                                            // Violet
                                                                                                                                                            color: "#FF0080"
                                                                                                                                                        }).then((ro) => {
                                                                                                                                                            console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                            ro.edit({
                                                                                                                                                                // Pink
                                                                                                                                                                color: "#FF0064"
                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                ro.edit({
                                                                                                                                                                    // Pink
                                                                                                                                                                    color: "#FF0023"
                                                                                                                                                                }).then((ro) => {
                                                                                                                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + ro.name + " COLOR CHANGED TO " + ro.hexColor))
                                                                                                                                                                    ro.edit({
                                                                                                                                                                        // Pink
                                                                                                                                                                        color: "#FF0000"
                                                                                                                                                                    })
                                                                                                                                                                }).catch((err) => {
                                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                })
                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                            })
                                                                                                                                                        }).catch((err) => {
                                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                        })
                                                                                                                                                    }).catch((err) => {
                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                    })
                                                                                                                                                }).catch((err) => {
                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        }).catch((err) => {
                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                        })
                                                                                                                                    }).catch((err) => {
                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                    })
                                                                                                                                }).catch((err) => {
                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                })
                                                                                                                            }).catch((err) => {
                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                            })
                                                                                                                        }).catch((err) => {
                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                        })
                                                                                                                    }).catch((err) => {
                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                    })
                                                                                                                }).catch((err) => {
                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                })
                                                                                                            }).catch((err) => {
                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                            })
                                                                                                        }).catch((err) => {
                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                        })
                                                                                                    }).catch((err) => {
                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                    })
                                                                                                }).catch((err) => {
                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                })
                                                                                            }).catch((err) => {
                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                            })
                                                                                        }).catch((err) => {
                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                        })
                                                                                    }).catch((err) => {
                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                    })
                                                                                }).catch((err) => {
                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                })
                                                                            }).catch((err) => {
                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                            })
                                                                        }).catch((err) => {
                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                        })
                                                                    }, 5000);
                                                                })
                                                            }
                                                            GradientMode()
                                                        } else {
                                                            /**
                                                             * Make Role Rotate Color:  Rainbow
                                                             */
                                                            function GradientModeNoLog(role) {
                                                                // Making Role below bot
                                                                const pos = guild.me.roles.highest.position - 2
                                                                role = guild.roles.create({
                                                                    data: {
                                                                        name: response,
                                                                        color: "#f04747",
                                                                        position: pos,
                                                                    }
                                                                }).then((r) => {
                                                                    console.log(chalk.greenBright("SUCCESS: ROLE " + response + " WAS CREATED\n"))
                                                                    console.log(chalk.yellowBright("WARNING: ROLE " + response + " ATTEMPTING RAINBOW\n"))
                                                                    setInterval(() => {
                                                                        r.edit({
                                                                            // Red
                                                                            color: "#E70000"
                                                                        }).then((ro) => {
                                                                            ro.edit({
                                                                                // Red
                                                                                color: "#FF0000"
                                                                            }).then((ro) => {
                                                                                ro.edit({
                                                                                    // Red
                                                                                    color: "#FF1F00"
                                                                                }).then((ro) => {
                                                                                    ro.edit({
                                                                                        // Orange
                                                                                        color: "#FF5D00"
                                                                                    }).then((ro) => {
                                                                                        ro.edit({
                                                                                            // Orange
                                                                                            color: "#FF8F00"
                                                                                        }).then((ro) => {
                                                                                            ro.edit({
                                                                                                // Orange
                                                                                                color: "#FFBD00"
                                                                                            }).then((ro) => {
                                                                                                ro.edit({
                                                                                                    // Yellow
                                                                                                    color: "#FFF000"
                                                                                                }).then((ro) => {
                                                                                                    ro.edit({
                                                                                                        // Yellow
                                                                                                        color: "#F3FF00"
                                                                                                    }).then((ro) => {
                                                                                                        ro.edit({
                                                                                                            // Yellow
                                                                                                            color: "#E0FF00"
                                                                                                        }).then((ro) => {
                                                                                                            ro.edit({
                                                                                                                // Green
                                                                                                                color: "#80FF00"
                                                                                                            }).then((ro) => {
                                                                                                                ro.edit({
                                                                                                                    // Green
                                                                                                                    color: "#42FF00"
                                                                                                                }).then((ro) => {
                                                                                                                    ro.edit({
                                                                                                                        // Green
                                                                                                                        color: "#06FFBF"
                                                                                                                    }).then((ro) => {
                                                                                                                        ro.edit({
                                                                                                                            // Blue
                                                                                                                            color: "#06FFFB"
                                                                                                                        }).then((ro) => {
                                                                                                                            ro.edit({
                                                                                                                                // Blue
                                                                                                                                color: "#06D2FF"
                                                                                                                            }).then((ro) => {
                                                                                                                                ro.edit({
                                                                                                                                    // Blue
                                                                                                                                    color: "#067BFF"
                                                                                                                                }).then((ro) => {
                                                                                                                                    ro.edit({
                                                                                                                                        // Purple
                                                                                                                                        color: "#7B06FF"
                                                                                                                                    }).then((ro) => {
                                                                                                                                        ro.edit({
                                                                                                                                            // Purple
                                                                                                                                            color: "#A106FF"
                                                                                                                                        }).then((ro) => {
                                                                                                                                            ro.edit({
                                                                                                                                                // Purple
                                                                                                                                                color: "#BB06FF"
                                                                                                                                            }).then((ro) => {
                                                                                                                                                ro.edit({
                                                                                                                                                    // Violet
                                                                                                                                                    color: "#FF00FF"
                                                                                                                                                }).then((ro) => {
                                                                                                                                                    ro.edit({
                                                                                                                                                        // Violet
                                                                                                                                                        color: "#FF00C1"
                                                                                                                                                    }).then((ro) => {
                                                                                                                                                        ro.edit({
                                                                                                                                                            // Violet
                                                                                                                                                            color: "#FF0080"
                                                                                                                                                        }).then((ro) => {
                                                                                                                                                            ro.edit({
                                                                                                                                                                // Pink
                                                                                                                                                                color: "#FF0064"
                                                                                                                                                            }).then((ro) => {
                                                                                                                                                                ro.edit({
                                                                                                                                                                    // Pink
                                                                                                                                                                    color: "#FF0023"
                                                                                                                                                                }).then((ro) => {
                                                                                                                                                                    ro.edit({
                                                                                                                                                                        // Pink
                                                                                                                                                                        color: "#FF0000"
                                                                                                                                                                    })
                                                                                                                                                                }).catch((err) => {
                                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                                })
                                                                                                                                                            }).catch((err) => {
                                                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                            })
                                                                                                                                                        }).catch((err) => {
                                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                        })
                                                                                                                                                    }).catch((err) => {
                                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                    })
                                                                                                                                                }).catch((err) => {
                                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        }).catch((err) => {
                                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                        })
                                                                                                                                    }).catch((err) => {
                                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                    })
                                                                                                                                }).catch((err) => {
                                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                                })
                                                                                                                            }).catch((err) => {
                                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                            })
                                                                                                                        }).catch((err) => {
                                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                        })
                                                                                                                    }).catch((err) => {
                                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                    })
                                                                                                                }).catch((err) => {
                                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                                })
                                                                                                            }).catch((err) => {
                                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                            })
                                                                                                        }).catch((err) => {
                                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                        })
                                                                                                    }).catch((err) => {
                                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                    })
                                                                                                }).catch((err) => {
                                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                                })
                                                                                            }).catch((err) => {
                                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                            })
                                                                                        }).catch((err) => {
                                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                        })
                                                                                    }).catch((err) => {
                                                                                        console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                    })
                                                                                }).catch((err) => {
                                                                                    console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                                })
                                                                            }).catch((err) => {
                                                                                console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                            })
                                                                        }).catch((err) => {
                                                                            console.log(chalk.red("ERROR: ROLE " + response + " FAILED TO RAINBOW + " + err))
                                                                        })
                                                                    }, 5000);
                                                                })
                                                            }
                                                            GradientModeNoLog()
                                                        }
                                                    })
                                                }
                                            });
                                        }
                                    );
                                }, 2000);
                            }
                        });
                    }, 3000);
                })
                .catch((err) => {
                    console.log(
                        chalk.red(`ERROR: Unable To Fetch Guild ID: ${guildID} | ` + err)
                    );
                    console.log(
                        chalk.yellowBright("WARNING: FAILURE TO CONTINUE | RESTARTING...")
                    );
                    setTimeout(() => {
                        process.exit();
                    }, 1000);
                });
        });
    }, 2000);
}

/**
 * Main Menu
 */
async function Menu() {
    console.log(`${chalk.red(`██████╗`)}   ${chalk.yellow(`█████╗`)}  ${chalk.green(`██╗`)} ${chalk.cyan(`███╗   ██║`)}  ${chalk.cyanBright(`██████╗`)}   ${chalk.magenta(`██████╗`)}  ${chalk.magentaBright(`██╗    ██╗`)}`)
    console.log(`${chalk.red(`██╔══██╗`)} ${chalk.yellow(`██╔══██╗`)} ${chalk.green(`██║`)} ${chalk.cyan(`████╗  ██║`)}  ${chalk.cyanBright(`██╔══██╗`)} ${chalk.magenta(`██╔═══██╗`)} ${chalk.magentaBright(`██║    ██║`)}`)
    console.log(`${chalk.red(`██████╔╝`)} ${chalk.yellow(`███████║`)} ${chalk.green(`██║`)} ${chalk.cyan(`████╗  ██║`)}  ${chalk.cyanBright(`██████╔╝`)} ${chalk.magenta(`██║   ██║`)} ${chalk.magentaBright(`██║ █╗ ██║`)}`)
    console.log(`${chalk.red(`██╔══██╗`)} ${chalk.yellow(`██╔══██║`)} ${chalk.green(`██║`)} ${chalk.cyan(`██╔██╗ ██║`)}  ${chalk.cyanBright(`██╔══██╗`)} ${chalk.magenta(`██║   ██║`)} ${chalk.magentaBright(`██║███╗██║`)}`)
    console.log(`${chalk.red(`██║  ██║`)} ${chalk.yellow(`██║  ██║`)} ${chalk.green(`██║`)} ${chalk.cyan(`██║ ╚████║`)}  ${chalk.cyanBright(`██████╔╝`)} ${chalk.magenta(`╚██████╔╝`)} ${chalk.magentaBright(`╚███╔███╔╝`)}`)
    console.log(`${chalk.red(`╚═╝  ╚═╝`)} ${chalk.yellow(`╚═╝  ╚═╝`)} ${chalk.green(`╚═╝`)} ${chalk.cyan(`╚═╝  ╚═══╝`)}  ${chalk.cyanBright(`╚═════╝ `)}  ${chalk.magenta(`╚═════╝`)}   ${chalk.magentaBright(`╚══╝╚══╝`)}`)
    console.log(`\n`)
    console.log(`\t\t\t${chalk.red(`S`)}${chalk.yellow(`e`)}${chalk.green(`l`)}${chalk.cyan(`e`)}${chalk.cyanBright(`c`)}${chalk.magenta(`t`)} ${chalk.magentaBright(`M`)}${chalk.red(`o`)}${chalk.yellow(`d`)}${chalk.green(`e`)}${chalk.cyan(`:`)}`)
    console.log(`\n`)
    console.log(`\t\t     ${chalk.gray(`[1]`)} ${chalk.red(`F`)}${chalk.yellow(`a`)}${chalk.green(`s`)}${chalk.cyan(`t`)} ${chalk.cyanBright(`M`)}${chalk.magenta(`o`)}${chalk.magentaBright(`d`)}${chalk.red(`e`)}`)
    console.log(`\t\t     ${chalk.gray(`[2]`)} ${chalk.red(`G`)}${chalk.yellow(`r`)}${chalk.green(`a`)}${chalk.cyan(`d`)}${chalk.cyanBright(`i`)}${chalk.magenta(`e`)}${chalk.magentaBright(`n`)}${chalk.red(`t`)} ${chalk.yellow(`M`)}${chalk.green(`o`)}${chalk.cyan(`d`)}${chalk.cyanBright(`e`)}\n\n`)
}

Main()


client.login(token);
