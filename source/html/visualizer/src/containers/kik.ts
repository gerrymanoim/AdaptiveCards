import { HostContainer } from "./host-container";
import * as Adaptive from "microsoft-adaptivecards";

export class KikContainer extends HostContainer {
    private _width: number;

    constructor(width: number, styleSheet: string) {
        super(styleSheet);

        this._width = width;
        this.supportsActionBar = false;
    }

    protected renderContainer(renderedCard: HTMLElement): HTMLElement {
        var outerElement = document.createElement("div");
        outerElement.className = "kikOuterContainer";
        outerElement.style.width = this._width + "px";
        outerElement.appendChild(renderedCard);
        return outerElement;
    }

    public getHostConfig(): Adaptive.IHostConfig {
        return {
            spacing: {
                small: 3,
                default: 8,
                medium: 20,
                large: 30,
                extraLarge: 40
            },
            padding: {
                small: 5,
                default: 10,
                large: 20
            },
            separator: {
                lineThickness: 1,
                lineColor: "#EEEEEE"        
            },
            supportsInteractivity: false,
            fontFamily: "Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif;",
            fontSizes: {
                small: 12,
                normal: 14,
                medium: 16,
                large: 19,
                extraLarge: 22
            },
            fontWeights: {
                lighter: 200,
                normal: 400,
                bolder: 600
            },
            colorPalettes: {
                default: {
                    backgroundColor: "#FFFFFF",
                    fontColors: {
                        accent: {
                            normal: "#FF0000FF",
                            subtle: "#b20000FF"
                        },
                        dark: {
                            normal: "#FF101010",
                            subtle: "#b2101010"
                        },
                        light: {
                            normal: "#FFFFFFFF",
                            subtle: "#b2FFFFFF"
                        },
                        good: {
                            normal: "#FF008000",
                            subtle: "#b2008000"
                        },
                        warning: {
                            normal: "#FFFFD700",
                            subtle: "#b2FFD700"
                        },
                        attention: {
                            normal: "#FF8B0000",
                            subtle: "#b28B0000"
                        }
                    }
                },
                emphasis: {
                    backgroundColor: "#08000000",
                    fontColors: {
                        accent: {
                            normal: "#FF0000FF",
                            subtle: "#b20000FF"
                        },
                        dark: {
                            normal: "#FF101010",
                            subtle: "#b2101010"
                        },
                        light: {
                            normal: "#FFFFFFFF",
                            subtle: "#b2FFFFFF"
                        },
                        good: {
                            normal: "#FF008000",
                            subtle: "#b2008000"
                        },
                        warning: {
                            normal: "#FFFFD700",
                            subtle: "#b2FFD700"
                        },
                        attention: {
                            normal: "#FF8B0000",
                            subtle: "#b28B0000"
                        }
                    }
                }
            },
            imageSizes: {
                small: 60,
                medium: 120,
                large: 180
            },
            actions: {
                maxActions: 5,
                spacing: "default",
                buttonSpacing: 10,
                showCard: {
                    actionMode: "inlineEdgeToEdge",
                    inlineTopMargin: 16,
                    padding: {
                        top: "default",
                        right: "default",
                        bottom: "default",
                        left: "default"
                    }
                },
                actionsOrientation: "horizontal",
                actionAlignment: "left"
            },
            adaptiveCard: {
                padding: {
                    left: "default",
                    top: "default",
                    right: "default",
                    bottom: "default"
                },
                allowCustomPadding: false,
                allowCustomColorPalette: false
            },
            textBlock: {
                color: "dark"
            },
            image: {
                size: "medium"
            },
            imageSet: {
                imageSize: "medium",
                maxImageHeight: 100
            },
            factSet: {
                title: {
                    color: "dark",
                    size: "normal",
                    isSubtle: false,
                    weight: "bolder",
                    wrap: true,
                    maxWidth: 150
                },
                value: {
                    color: "dark",
                    size: "normal",
                    isSubtle: false,
                    weight: "normal",
                    wrap: true
                },
                spacing: 10
            }
        };
    }
}