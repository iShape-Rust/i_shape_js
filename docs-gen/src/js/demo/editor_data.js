export const tests = [
{
    name: "Simple",
    subjs: [
        {
            paths: [
                {
                    points: [[200, 300], [200, 100], [400, 100], [400, 300]]
                }
            ]
        }
    ],
    clips: [
        {
            paths: [
                {
                    points: [[300, 400], [300, 200], [500, 200], [500, 400]]
                }
            ]
        }
    ]
},
{
    name: "Overlap",
    subjs: [
        {
            paths: [
                {
                    points: [[200, 350], [200, 150], [400, 150], [400, 350]]
                }
            ]
        }
    ],
    clips: [
        {
            paths: [
                {
                    points: [[300, 350], [300, 150], [500, 150], [500, 350]]
                }
            ]
        }
    ]
},
{
    name: "Hole",
    subjs: [
        {
            paths: [
                {
                    points: [[300, 150], [300, 350], [500, 350], [500, 150]]
                }
            ]
        }
    ],
    clips: [
        {
            paths: [
                {
                    points: [[350, 200], [350, 300], [450, 300], [450, 200]]
                }
            ]
        }
    ]
},
{
    name: "Disjoint Polygons",
    subjs: [
        {
            paths: [
                {
                    points: [[100, 150], [100, 350], [300, 350], [300, 150]]
                }
            ]
        }
    ],
    clips: [
        {
            paths: [
                {
                    points: [[450, 150], [450, 350], [650, 350], [650, 150]]
                }
            ]
        }
    ]
},
{
    name: "Coincident Edges",
    subjs: [
        {
            paths: [
                {
                    points: [[175, 150], [175, 350], [375, 350], [375, 150]]
                }
            ]
        }
    ],
    clips: [
        {
            paths: [
                {
                    points: [[375, 150], [375, 350], [575, 350], [575, 150]]
                }
            ]
        }
    ]
},
{
    name: "Touching at Point",
    subjs: [
        {
            paths: [
                {
                    points: [[225, 250], [225, 400], [375, 400], [375, 250]]
                }
            ]
        }
    ],
    clips: [
        {
            paths: [
                {
                    points: [[375, 100], [375, 250], [525, 250], [525, 100]]
                }
            ]
        }
    ]
},
{
    name: "Polygon With a Hole 1",
    subjs: [
        {
            paths: [
                {
                    points: [[250, 100], [250, 400], [550, 400], [550, 100]]
                },
                {
                    points: [[300, 150], [300, 350], [500, 350], [500, 150]]
                }
            ]
        }
    ],
    clips: [
        {
            paths: [
                {
                    points: [[350, 200], [350, 300], [450, 300], [450, 200]]
                }
            ]
        }
    ]
},
{
    name: "Polygon With a Hole 2",
    subjs: [
        {
            paths: [
                {
                    points: [[250, 100], [250, 400], [550, 400], [550, 100]]
                }
            ]
        }
    ],
    clips: [
        {
            paths: [
                {
                    points: [[300, 150], [300, 350], [500, 350], [500, 150]]                
                },
                {
                    points: [[350, 200], [350, 300], [450, 300], [450, 200]]
                }
            ]
        }
    ]
},
{
    name: "Polygon With a Hole 3",
    subjs: [
        {
            paths: [
                {
                    points: [[300, 150], [300, 350], [500, 350], [500, 150]]                
                },
                {
                    points: [[350, 200], [350, 300], [450, 300], [450, 200]]
                }
            ]
        }
    ],
    clips: [
        {
            paths: [
                {
                    points: [[250, 100], [250, 400], [550, 400], [550, 100]]
                }
            ]
        }
    ]
},
{
    name: "Many Holes in Sybject",
    subjs: [
        {
            paths: [
                {
                    points: [[250, 100], [250, 400], [550, 400], [550, 100]]
                },
                {
                    points: [[300, 150], [300, 250], [400, 250], [400, 150]]
                },
                {
                    points: [[400, 250], [400, 350], [500, 350], [500, 250]]
                }
            ]
        }
    ],
    clips: [
        {
            paths: [
                {
                    points: [[350, 200], [350, 300], [450, 300], [450, 200]]
                }
            ]
        }
    ]
},
{
    name: "Intersecting Holes in Subject and Clip",
    subjs: [
        {
            paths: [
                {
                    points: [[200,  50], [200, 450], [600, 450], [600,  50]]
                },
                {
                    points: [[300, 150], [300, 350], [500, 350], [500, 150]]                
                },
            ]
        }
    ],
    clips: [
        {
            paths: [
                {
                    points: [[250, 100], [250, 400], [550, 400], [550, 100]]
                },
                {
                    points: [[350, 200], [350, 300], [450, 300], [450, 200]]
                }
            ]
        }
    ]
},
{
    name: "Create a Hole",
    subjs: [
        {
            paths: [
                {
                    points: [[300, 150], [300, 350], [450, 350], [450, 300], [350, 300], [350, 200], [450, 200], [450, 150]]
                }
            ]
        }
    ],
    clips: [
        {
            paths: [
                {
                    points: [[500, 150], [500, 350], [450, 350], [450, 150]]
                }
            ]
        }
    ]
},
{
    name: "Create a Hole",
    subjs: [
        {
            paths: [
                {
                    points: [[100, 300], [200, 100], [300, 300], [100, 300], [150, 300], [200, 200], [250, 300], [200, 400]]
                }
            ]
        }
    ],
    clips: [
        {
            paths: [
                {
                    points: [[500,  300], [500,  200], [550,  200], [550, 250], [400, 250], [400,  350], [600, 350], [600, 150], [450, 150], [450, 300]]
                }
            ]
        }
    ]
},
]

                // CGPoint(x:   0, y:   5),
                // CGPoint(x:   0, y:  -5),
                // CGPoint(x:   5, y:  -5),
                // CGPoint(x:   5, y:   0),
                // CGPoint(x: -10, y:   0),
                // CGPoint(x: -10, y:  10),
                // CGPoint(x:  10, y:  10),
                // CGPoint(x:  10, y: -10),
                // CGPoint(x:  -5, y: -10),
                // CGPoint(x:  -5, y:   5)
