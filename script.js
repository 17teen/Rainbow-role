/**
 * Rainbow Role Script
 * Discord: 7teen#3868
 * Github: /17teen.com
 */

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
    console.log(
        chalk.greenBright(`Bot: ${client.user.tag} is online\n`)
    );
});

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
                                                                            /**
                                                                             * Make Role Rotate Color:  Rainbow
                                                                             */
                                                                            function RainbowRole(role) {
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
                                                                            RainbowRole();
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
                                                /**
                                                 * Make Role Rotate Color:  Rainbow
                                                 */
                                                function RainbowRole(role) {
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
                                                RainbowRole();
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
                                                                            /**
                                                                             * Make Role Rotate Color:  Rainbow
                                                                             */
                                                                            function RainbowRole(role) {
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
                                                                            RainbowRole();
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
                                                /**
                                                 * Make Role Rotate Color:  Rainbow
                                                 */
                                                function RainbowRole(role) {
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
                                                RainbowRole();
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

client.login(token);
