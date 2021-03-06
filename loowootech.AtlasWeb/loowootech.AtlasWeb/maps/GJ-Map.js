﻿var configuration = {
    host: host,
    dynamicServiceName: "GJ-Main",
    title: "高级专题-地图",
    initialMaps: [0],
    maps:
        [
            {
                Title: "地图1",
                OverviewImage: "/img/temp/高级专题地图一示意图.png",
                LegendImage: "/img/temp/GJ.png",
                FullExtent: { xmin: 40528859, ymin: 3361187, xmax: 40540347, ymax: 3375107 },
                Basemaps:
                    [
                        {
                            Id: 0,
                            Name: "遥感影像",
                            Title: "遥感影像",
                            IndexInService: 1,
                            TileServiceName: "Raster",
                            Editable: false,
                            ShowPicture: false,
                            PictureEditable: false,
                            Visible: true,
                            Alpha: 255
                        },
                        {
                            Id: 1,
                            Name: "土地利用",
                            Title: "土地利用",
                            IndexInService: 20,
                            TileServiceName: "DLTB",
                            ShowAttributes: true,
                            Editable: false,
                            ShowPicture: false,
                            PictureEditable: false,
                            Visible: false,
                            Alpha: 255

                        },
                        {
                            Id: 2,
                            Name: "土地规划",
                            Title: "土地规划",
                            IndexInService: 22,
                            TileServiceName: "GHYT",
                            ShowAttributes: true,
                            Editable: false,
                            ShowPicture: false,
                            PictureEditable: false,
                            Visible: false,
                            Alpha: 255
                        },
                        {
                            Id: 3,
                            Name: "控规",
                            Title: "控规",
                            IndexInService: 1,
                            TileServiceName: "KG",
                            Editable: false,
                            ShowPicture: false,
                            PictureEditable: false,
                            Visible: false,
                            Alpha: 255
                        },
                        {
                            Id: 4,
                            Name: "总规",
                            Title: "总规",
                            IndexInService: 1,
                            TileServiceName: "ZG",
                            Editable: false,
                            ShowPicture: false,
                            PictureEditable: false,
                            Visible: false,
                            Alpha: 255
                        },
                        {
                            Id: 5,
                            Name: "建设用地管制区",
                            Title: "建设用地管制区",
                            IndexInService: 23,
                            TileServiceName: "JSYDGZQ",
                            ShowAttributes: true,
                            Editable: false,
                            ShowPicture: false,
                            PictureEditable: false,
                            Visible: false,
                            Alpha: 255
                        },
                        {
                            Id: 6,
                            Name: "地形",
                            Title: "地形",
                            IndexInService: 23,
                            TileServiceName: "DX",
                            Editable: false,
                            ShowPicture: false,
                            PictureEditable: false,
                            Visible: true,
                            Alpha: 255
                        }
                    ],
                Categories:
                    [
                        {
                            Id: 1,
                            Name: "标注数据",
                            Visible: true,
                            Layers:
                                [
                                    {
                                        Id: 1,
                                        Name: "标注",
                                        Title: "标注",
                                        IndexInService: 1,
                                        TileServiceName: "",
                                        Editable: true,
                                        ShowPicture: false,
                                        PictureEditable: false,
                                        Annotation: true,
                                        Visible: true,
                                        Alpha: 255,
                                        Symbol: {
                                            FillColor: { R: 255, G: 0, B: 0, A: 0 },
                                            OutlineColor: { R: 0, G: 255, B: 197, A: 1 }
                                        },
                                        CategoryId: 1,
                                        MinScale: 10000
                                    }
                                ]
                        },
                        {
                            Id: 2,
                            Name: "用地信息数据",
                            Visible: true,
                            Layers:
                                [
                                    {
                                        Id: 2,
                                        Name: "供地数据",
                                        Title: "供地数据",
                                        IndexInService: 7,
                                        TileServiceName: "GD",
                                        Editable: false,
                                        ShowPicture: false,
                                        PictureEditable: false,
                                        Visible: true,
                                        Alpha: 255,
                                        CategoryId: 2,
                                    },
                                    {
                                        Id: 3,
                                        Name: "土地权属",
                                        Title: "土地权属",
                                        IndexInService: 6,
                                        TileServiceName: "TDQS",
                                        Editable: false,
                                        ShowPicture: false,
                                        PictureEditable: false,
                                        Visible: true,
                                        Alpha: 255,
                                        CategoryId: 2,
                                    },
                                    {
                                        Id: 4,
                                        Name: "整治建新",
                                        Title: "整治建新",
                                        IndexInService: 5,
                                        TileServiceName: "ZZJX",
                                        Editable: false,
                                        ShowPicture: false,
                                        PictureEditable: false,
                                        Visible: true,
                                        Alpha: 255,
                                        CategoryId: 2,
                                    },
                                    {
                                        Id: 5,
                                        Name: "整治拆旧",
                                        Title: "整治拆旧",
                                        IndexInService: 4,
                                        TileServiceName: "ZZCJ",
                                        Editable: false,
                                        ShowPicture: false,
                                        PictureEditable: false,
                                        Visible: true,
                                        Alpha: 255,
                                        CategoryId: 2,
                                    },
                                     {
                                         Id: 6,
                                         Name: "农转用",
                                         Title: "农转用",
                                         IndexInService: 3,
                                         TileServiceName: "NZY",
                                         Editable: false,
                                         ShowPicture: false,
                                         PictureEditable: false,
                                         Visible: true,
                                         Alpha: 255,
                                         CategoryId: 2,
                                     }
                                ]
                        },
                        {
                            Id: 3,
                            Name: "其他相关控规分析",
                            Visible: true,
                            Layers:
                                [
                                     {
                                         Id: 7,
                                         Name: "标准农田上图入库",
                                         Title: "标准农田上图入库",
                                         IndexInService: 12,
                                         TileServiceName: "BZNT",
                                         Editable: false,
                                         ShowPicture: false,
                                         PictureEditable: false,
                                         Visible: true,
                                         Alpha: 255,
                                         CategoryId: 3,
                                     },
                                      {
                                          Id: 8,
                                          Name: "已建高标准",
                                          Title: "已建高标准",
                                          IndexInService: 10,
                                          TileServiceName: "GBZNT",
                                          Editable: false,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: true,
                                          Alpha: 255,
                                          CategoryId: 3,
                                      },
                                        {
                                            Id: 9,
                                            Name: "粮食功能区",
                                            Title: "粮食功能区",
                                            IndexInService: 9,
                                            TileServiceName: "LSGNQ",
                                            Editable: false,
                                            ShowPicture: false,
                                            PictureEditable: false,
                                            Visible: true,
                                            Alpha: 255,
                                            CategoryId: 3,
                                        }
                                ]
                        },
                         {
                             Id: 4,
                             Name: "地价数据",
                             Visible: true,
                             Layers:
                                 [
                                      {
                                          Id: 10,
                                          Name: "级别基准地价",
                                          Title: "级别基准地价",
                                          IndexInService: 14,
                                          TileServiceName: "JBJ",
                                          Editable: false,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: true,
                                          Alpha: 255,
                                          CategoryId: 4,
                                      }
                                 ]
                         },
                         {
                             Id: 5,
                             Name: "地籍地形数据",
                             Visible: true,
                             Layers:
                                 [
                                     {
                                         Id: 11,
                                         Name: "地籍房屋层",
                                         Title: "地籍房屋层",
                                         IndexInService: 16,
                                         TileServiceName: "",
                                         Editable: true,
                                         ShowPicture: true,
                                         PictureEditable: false,
                                         Visible: true,
                                         Alpha: 255,
                                         CategoryId: 5,
                                     },
                                      {
                                          Id: 12,
                                          Name: "地籍宗地层",
                                          Title: "地籍宗地层",
                                          IndexInService: 17,
                                          TileServiceName: "DJZD",
                                          Editable: false,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: true,
                                          Alpha: 255,
                                          CategoryId: 5,
                                      }
                                 ]
                         },
                         {
                             Id: 6,
                             Name: "基础现状数据",
                             Visible: true,
                             Layers:
                                 [
                                     {
                                         Id: 13,
                                         Name: "现状地物",
                                         Title: "现状地物",
                                         IndexInService: 19,
                                         TileServiceName: "XZDW",
                                         Editable: false,
                                         ShowPicture: false,
                                         PictureEditable: false,
                                         Visible: true,
                                         Alpha: 255,
                                         CategoryId: 6,
                                     },
                                     {
                                         Id: 14,
                                         Name: "地类图斑",
                                         Title: "地类图斑",
                                         IndexInService: 20,
                                         TileServiceName: "DLTB",
                                         Editable: false,
                                         ShowPicture: false,
                                         PictureEditable: false,
                                         Visible: true,
                                         Alpha: 255,
                                         CategoryId: 6,
                                     }
                                 ]
                         },
                          {
                              Id: 7,
                              Name: "土地规划数据",
                              Visible: true,
                              Layers:
                                  [
                                      {
                                          Id: 15,
                                          Name: "规划用途",
                                          Title: "规划用途",
                                          IndexInService: 22,
                                          TileServiceName: "GHYT",
                                          Editable: false,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: false,
                                          Alpha: 255,
                                          CategoryId: 7,
                                      },
                                      {
                                          Id: 16,
                                          Name: "建设用地管制区",
                                          Title: "建设用地管制区",
                                          IndexInService: 23,
                                          TileServiceName: "JSYDGZQ",
                                          Editable: false,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: false,
                                          Alpha: 255,
                                          CategoryId: 7,
                                      }
                                  ]
                          }
                    ]
            },
             {
                 Title: "地图2",
                 OverviewImage: "/img/temp/高级专题地图二示意图.png",
                 LegendImage: "/img/temp/GJ.png",
                 FullExtent: { xmin: 40528859, ymin: 3361187, xmax: 40540347, ymax: 3375107 },
                 Basemaps:
                     [
                         {
                             Id: 0,
                             Name: "遥感影像",
                             Title: "遥感影像",
                             IndexInService: 1,
                             TileServiceName: "Raster",
                             Editable: false,
                             ShowPicture: false,
                             PictureEditable: false,
                             Visible: true,
                             Alpha: 255
                         },
                         {
                             Id: 1,
                             Name: "土地利用",
                             Title: "土地利用",
                             IndexInService: 20,
                             TileServiceName: "DLTB",
                             ShowAttributes: true,
                             Editable: false,
                             ShowPicture: false,
                             PictureEditable: false,
                             Visible: false,
                             Alpha: 255

                         },
                         {
                             Id: 2,
                             Name: "土地规划",
                             Title: "土地规划",
                             IndexInService: 22,
                             TileServiceName: "GHYT",
                             ShowAttributes: true,
                             Editable: false,
                             ShowPicture: false,
                             PictureEditable: false,
                             Visible: false,
                             Alpha: 255
                         },
                         {
                             Id: 3,
                             Name: "控规",
                             Title: "控规",
                             IndexInService: 1,
                             TileServiceName: "KG",
                             Editable: false,
                             ShowPicture: false,
                             PictureEditable: false,
                             Visible: false,
                             Alpha: 255
                         },
                         {
                             Id: 4,
                             Name: "总规",
                             Title: "总规",
                             IndexInService: 1,
                             TileServiceName: "ZG",
                             Editable: false,
                             ShowPicture: false,
                             PictureEditable: false,
                             Visible: false,
                             Alpha: 255
                         },
                         {
                             Id: 5,
                             Name: "建设用地管制区",
                             Title: "建设用地管制区",
                             IndexInService: 23,
                             TileServiceName: "JSYDGZQ",
                             ShowAttributes: true,
                             Editable: false,
                             ShowPicture: false,
                             PictureEditable: false,
                             Visible: false,
                             Alpha: 255
                         },
                         {
                             Id: 6,
                             Name: "地形",
                             Title: "地形",
                             IndexInService: 23,
                             TileServiceName: "DX",
                             Editable: false,
                             ShowPicture: false,
                             PictureEditable: false,
                             Visible: true,
                             Alpha: 255
                         }
                     ],
                 Categories:
                     [
                         {
                             Id: 1,
                             Name: "标注数据",
                             Visible: true,
                             Layers:
                                 [
                                     {
                                         Id: 1,
                                         Name: "标注",
                                         Title: "标注",
                                         IndexInService: 1,
                                         TileServiceName: "",
                                         Editable: true,
                                         ShowPicture: false,
                                         PictureEditable: false,
                                         Annotation: true,
                                         Visible: true,
                                         Alpha: 255,
                                         Symbol: {
                                             FillColor: { R: 255, G: 0, B: 0, A: 0 },
                                             OutlineColor: { R: 0, G: 255, B: 197, A: 1 }
                                         },
                                         CategoryId: 1,
                                         MinScale: 10000
                                     }
                                 ]
                         },
                         {
                             Id: 2,
                             Name: "用地信息数据",
                             Visible: true,
                             Layers:
                                 [
                                     {
                                         Id: 2,
                                         Name: "供地数据",
                                         Title: "供地数据",
                                         IndexInService: 7,
                                         TileServiceName: "GD",
                                         Editable: false,
                                         ShowPicture: false,
                                         PictureEditable: false,
                                         Visible: true,
                                         Alpha: 255,
                                         CategoryId: 2,
                                     },
                                     {
                                         Id: 3,
                                         Name: "土地权属",
                                         Title: "土地权属",
                                         IndexInService: 6,
                                         TileServiceName: "TDQS",
                                         Editable: false,
                                         ShowPicture: false,
                                         PictureEditable: false,
                                         Visible: true,
                                         Alpha: 255,
                                         CategoryId: 2,
                                     },
                                     {
                                         Id: 4,
                                         Name: "整治建新",
                                         Title: "整治建新",
                                         IndexInService: 5,
                                         TileServiceName: "ZZJX",
                                         Editable: false,
                                         ShowPicture: false,
                                         PictureEditable: false,
                                         Visible: true,
                                         Alpha: 255,
                                         CategoryId: 2,
                                     },
                                     {
                                         Id: 5,
                                         Name: "整治拆旧",
                                         Title: "整治拆旧",
                                         IndexInService: 4,
                                         TileServiceName: "ZZCJ",
                                         Editable: false,
                                         ShowPicture: false,
                                         PictureEditable: false,
                                         Visible: true,
                                         Alpha: 255,
                                         CategoryId: 2,
                                     },
                                      {
                                          Id: 6,
                                          Name: "农转用",
                                          Title: "农转用",
                                          IndexInService: 3,
                                          TileServiceName: "NZY",
                                          Editable: false,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: true,
                                          Alpha: 255,
                                          CategoryId: 2,
                                      }
                                 ]
                         },
                         {
                             Id: 3,
                             Name: "其他相关控规分析",
                             Visible: true,
                             Layers:
                                 [
                                      {
                                          Id: 7,
                                          Name: "标准农田上图入库",
                                          Title: "标准农田上图入库",
                                          IndexInService: 12,
                                          TileServiceName: "BZNT",
                                          Editable: false,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: true,
                                          Alpha: 255,
                                          CategoryId: 3,
                                      },
                                       {
                                           Id: 8,
                                           Name: "已建高标准",
                                           Title: "已建高标准",
                                           IndexInService: 10,
                                           TileServiceName: "GBZNT",
                                           Editable: false,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: true,
                                           Alpha: 255,
                                           CategoryId: 3,
                                       },
                                         {
                                             Id: 9,
                                             Name: "粮食功能区",
                                             Title: "粮食功能区",
                                             IndexInService: 9,
                                             TileServiceName: "LSGNQ",
                                             Editable: false,
                                             ShowPicture: false,
                                             PictureEditable: false,
                                             Visible: true,
                                             Alpha: 255,
                                             CategoryId: 3,
                                         }
                                 ]
                         },
                          {
                              Id: 4,
                              Name: "地价数据",
                              Visible: true,
                              Layers:
                                  [
                                       {
                                           Id: 10,
                                           Name: "级别基准地价",
                                           Title: "级别基准地价",
                                           IndexInService: 14,
                                           TileServiceName: "JBJ",
                                           Editable: false,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: true,
                                           Alpha: 255,
                                           CategoryId: 4,
                                       }
                                  ]
                          },
                          {
                              Id: 5,
                              Name: "地籍地形数据",
                              Visible: true,
                              Layers:
                                  [
                                      {
                                          Id: 11,
                                          Name: "地籍房屋层",
                                          Title: "地籍房屋层",
                                          IndexInService: 16,
                                          TileServiceName: "",
                                          Editable: true,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: true,
                                          Alpha: 255,
                                          CategoryId: 5,
                                      },
                                       {
                                           Id: 12,
                                           Name: "地籍宗地层",
                                           Title: "地籍宗地层",
                                           IndexInService: 17,
                                           TileServiceName: "DJZD",
                                           Editable: true,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: true,
                                           Alpha: 255,
                                           CategoryId: 5,
                                       }
                                  ]
                          },
                          {
                              Id: 6,
                              Name: "基础现状数据",
                              Visible: true,
                              Layers:
                                  [
                                      {
                                          Id: 13,
                                          Name: "现状地物",
                                          Title: "现状地物",
                                          IndexInService: 19,
                                          TileServiceName: "XZDW",
                                          Editable: false,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: true,
                                          Alpha: 255,
                                          CategoryId: 6,
                                      },
                                      {
                                          Id: 14,
                                          Name: "地类图斑",
                                          Title: "地类图斑",
                                          IndexInService: 20,
                                          TileServiceName: "DLTB",
                                          Editable: false,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: false,
                                          Alpha: 255,
                                          CategoryId: 6,
                                      }
                                  ]
                          },
                           {
                               Id: 7,
                               Name: "土地规划数据",
                               Visible: true,
                               Layers:
                                   [
                                       {
                                           Id: 15,
                                           Name: "规划用途",
                                           Title: "规划用途",
                                           IndexInService: 22,
                                           TileServiceName: "GHYT",
                                           Editable: false,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: false,
                                           Alpha: 255,
                                           CategoryId: 7,
                                       },
                                       {
                                           Id: 16,
                                           Name: "建设用地管制区",
                                           Title: "建设用地管制区",
                                           IndexInService: 23,
                                           TileServiceName: "JSYDGZQ",
                                           Editable: false,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: false,
                                           Alpha: 255,
                                           CategoryId: 7,
                                       }
                                   ]
                           }
                     ]
             },
              {
                  Title: "地图3",
                  OverviewImage: "/img/temp/高级专题地图三示意图.png",
                  LegendImage: "/img/temp/GJ.png",
                  FullExtent: { xmin: 40528859, ymin: 3361187, xmax: 40540347, ymax: 3375107 },
                  Basemaps:
                      [
                          {
                              Id: 0,
                              Name: "遥感影像",
                              Title: "遥感影像",
                              IndexInService: 1,
                              TileServiceName: "Raster",
                              Editable: false,
                              ShowPicture: false,
                              PictureEditable: false,
                              Visible: true,
                              Alpha: 255
                          },
                          {
                              Id: 1,
                              Name: "土地利用",
                              Title: "土地利用",
                              IndexInService: 20,
                              TileServiceName: "DLTB",
                              ShowAttributes: true,
                              Editable: false,
                              ShowPicture: false,
                              PictureEditable: false,
                              Visible: false,
                              Alpha: 255

                          },
                          {
                              Id: 2,
                              Name: "土地规划",
                              Title: "土地规划",
                              IndexInService: 22,
                              TileServiceName: "GHYT",
                              ShowAttributes: true,
                              Editable: false,
                              ShowPicture: false,
                              PictureEditable: false,
                              Visible: false,
                              Alpha: 255
                          },
                          {
                              Id: 3,
                              Name: "控规",
                              Title: "控规",
                              IndexInService: 1,
                              TileServiceName: "KG",
                              Editable: false,
                              ShowPicture: false,
                              PictureEditable: false,
                              Visible: false,
                              Alpha: 255
                          },
                          {
                              Id: 4,
                              Name: "总规",
                              Title: "总规",
                              IndexInService: 1,
                              TileServiceName: "ZG",
                              Editable: false,
                              ShowPicture: false,
                              PictureEditable: false,
                              Visible: false,
                              Alpha: 255
                          },
                          {
                              Id: 5,
                              Name: "建设用地管制区",
                              Title: "建设用地管制区",
                              IndexInService: 23,
                              TileServiceName: "JSYDGZQ",
                              ShowAttributes: true,
                              Editable: false,
                              ShowPicture: false,
                              PictureEditable: false,
                              Visible: false,
                              Alpha: 255
                          },
                          {
                              Id: 6,
                              Name: "地形",
                              Title: "地形",
                              IndexInService: 23,
                              TileServiceName: "DX",
                              Editable: false,
                              ShowPicture: false,
                              PictureEditable: false,
                              Visible: true,
                              Alpha: 255
                          }
                      ],
                  Categories:
                      [
                          {
                              Id: 1,
                              Name: "标注数据",
                              Visible: true,
                              Layers:
                                  [
                                      {
                                          Id: 1,
                                          Name: "标注",
                                          Title: "标注",
                                          IndexInService: 1,
                                          TileServiceName: "",
                                          Editable: true,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Annotation: true,
                                          Visible: true,
                                          Alpha: 255,
                                          Symbol: {
                                              FillColor: { R: 255, G: 0, B: 0, A: 0 },
                                              OutlineColor: { R: 0, G: 255, B: 197, A: 1 }
                                          },
                                          CategoryId: 1,
                                          MinScale: 10000
                                      }
                                  ]
                          },
                          {
                              Id: 2,
                              Name: "用地信息数据",
                              Visible: true,
                              Layers:
                                  [
                                      {
                                          Id: 2,
                                          Name: "供地数据",
                                          Title: "供地数据",
                                          IndexInService: 7,
                                          TileServiceName: "GD",
                                          Editable: false,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: true,
                                          Alpha: 255,
                                          CategoryId: 2,
                                      },
                                      {
                                          Id: 3,
                                          Name: "土地权属",
                                          Title: "土地权属",
                                          IndexInService: 6,
                                          TileServiceName: "TDQS",
                                          Editable: false,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: true,
                                          Alpha: 255,
                                          CategoryId: 2,
                                      },
                                      {
                                          Id: 4,
                                          Name: "整治建新",
                                          Title: "整治建新",
                                          IndexInService: 5,
                                          TileServiceName: "ZZJX",
                                          Editable: false,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: true,
                                          Alpha: 255,
                                          CategoryId: 2,
                                      },
                                      {
                                          Id: 5,
                                          Name: "整治拆旧",
                                          Title: "整治拆旧",
                                          IndexInService: 4,
                                          TileServiceName: "ZZCJ",
                                          Editable: false,
                                          ShowPicture: false,
                                          PictureEditable: false,
                                          Visible: true,
                                          Alpha: 255,
                                          CategoryId: 2,
                                      },
                                       {
                                           Id: 6,
                                           Name: "农转用",
                                           Title: "农转用",
                                           IndexInService: 3,
                                           TileServiceName: "NZY",
                                           Editable: false,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: true,
                                           Alpha: 255,
                                           CategoryId: 2,
                                       }
                                  ]
                          },
                          {
                              Id: 3,
                              Name: "其他相关控规分析",
                              Visible: true,
                              Layers:
                                  [
                                       {
                                           Id: 7,
                                           Name: "标准农田上图入库",
                                           Title: "标准农田上图入库",
                                           IndexInService: 12,
                                           TileServiceName: "BZNT",
                                           Editable: false,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: true,
                                           Alpha: 255,
                                           CategoryId: 3,
                                       },
                                        {
                                            Id: 8,
                                            Name: "已建高标准",
                                            Title: "已建高标准",
                                            IndexInService: 10,
                                            TileServiceName: "GBZNT",
                                            Editable: false,
                                            ShowPicture: false,
                                            PictureEditable: false,
                                            Visible: true,
                                            Alpha: 255,
                                            CategoryId: 3,
                                        },
                                          {
                                              Id: 9,
                                              Name: "粮食功能区",
                                              Title: "粮食功能区",
                                              IndexInService: 9,
                                              TileServiceName: "LSGNQ",
                                              Editable: false,
                                              ShowPicture: false,
                                              PictureEditable: false,
                                              Visible: true,
                                              Alpha: 255,
                                              CategoryId: 3,
                                          }
                                  ]
                          },
                           {
                               Id: 4,
                               Name: "地价数据",
                               Visible: true,
                               Layers:
                                   [
                                        {
                                            Id: 10,
                                            Name: "级别基准地价",
                                            Title: "级别基准地价",
                                            IndexInService: 14,
                                            TileServiceName: "JBJ",
                                            Editable: false,
                                            ShowPicture: false,
                                            PictureEditable: false,
                                            Visible: true,
                                            Alpha: 255,
                                            CategoryId: 4,
                                        }
                                   ]
                           },
                           {
                               Id: 5,
                               Name: "地籍地形数据",
                               Visible: true,
                               Layers:
                                   [
                                       {
                                           Id: 11,
                                           Name: "地籍房屋层",
                                           Title: "地籍房屋层",
                                           IndexInService: 16,
                                           TileServiceName: "",
                                           Editable: true,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: true,
                                           Alpha: 255,
                                           CategoryId: 5,
                                       },
                                        {
                                            Id: 12,
                                            Name: "地籍宗地层",
                                            Title: "地籍宗地层",
                                            IndexInService: 17,
                                            TileServiceName: "DJZD",
                                            Editable: true,
                                            ShowPicture: false,
                                            PictureEditable: false,
                                            Visible: true,
                                            Alpha: 255,
                                            CategoryId: 5,
                                        }
                                   ]
                           },
                           {
                               Id: 6,
                               Name: "基础现状数据",
                               Visible: true,
                               Layers:
                                   [
                                       {
                                           Id: 13,
                                           Name: "现状地物",
                                           Title: "现状地物",
                                           IndexInService: 19,
                                           TileServiceName: "XZDW",
                                           Editable: false,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: true,
                                           Alpha: 255,
                                           CategoryId: 6,
                                       },
                                       {
                                           Id: 14,
                                           Name: "地类图斑",
                                           Title: "地类图斑",
                                           IndexInService: 20,
                                           TileServiceName: "DLTB",
                                           Editable: false,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: false,
                                           Alpha: 255,
                                           CategoryId: 6,
                                       }
                                   ]
                           },
                            {
                                Id: 7,
                                Name: "土地规划数据",
                                Visible: true,
                                Layers:
                                    [
                                        {
                                            Id: 15,
                                            Name: "规划用途",
                                            Title: "规划用途",
                                            IndexInService: 22,
                                            TileServiceName: "GHYT",
                                            Editable: false,
                                            ShowPicture: false,
                                            PictureEditable: false,
                                            Visible: false,
                                            Alpha: 255,
                                            CategoryId: 7,
                                        },
                                        {
                                            Id: 16,
                                            Name: "建设用地管制区",
                                            Title: "建设用地管制区",
                                            IndexInService: 23,
                                            TileServiceName: "JSYDGZQ",
                                            Editable: false,
                                            ShowPicture: false,
                                            PictureEditable: false,
                                            Visible: false,
                                            Alpha: 255,
                                            CategoryId: 7,
                                        }
                                    ]
                            }
                      ]
              },
               {
                   Title: "地图4",
                   OverviewImage: "/img/temp/高级专题地图四示意图.png",
                   LegendImage: "/img/temp/GJ.png",
                   FullExtent: { xmin: 40528859, ymin: 3361187, xmax: 40540347, ymax: 3375107 },
                   Basemaps:
                       [
                           {
                               Id: 0,
                               Name: "遥感影像",
                               Title: "遥感影像",
                               IndexInService: 1,
                               TileServiceName: "Raster",
                               Editable: false,
                               ShowPicture: false,
                               PictureEditable: false,
                               Visible: true,
                               Alpha: 255
                           },
                           {
                               Id: 1,
                               Name: "土地利用",
                               Title: "土地利用",
                               IndexInService: 20,
                               TileServiceName: "DLTB",
                               ShowAttributes: true,
                               Editable: false,
                               ShowPicture: false,
                               PictureEditable: false,
                               Visible: false,
                               Alpha: 255

                           },
                           {
                               Id: 2,
                               Name: "土地规划",
                               Title: "土地规划",
                               IndexInService: 22,
                               TileServiceName: "GHYT",
                               ShowAttributes: true,
                               Editable: false,
                               ShowPicture: false,
                               PictureEditable: false,
                               Visible: false,
                               Alpha: 255
                           },
                           {
                               Id: 3,
                               Name: "控规",
                               Title: "控规",
                               IndexInService: 1,
                               TileServiceName: "KG",
                               Editable: false,
                               ShowPicture: false,
                               PictureEditable: false,
                               Visible: false,
                               Alpha: 255
                           },
                           {
                               Id: 4,
                               Name: "总规",
                               Title: "总规",
                               IndexInService: 1,
                               TileServiceName: "ZG",
                               Editable: false,
                               ShowPicture: false,
                               PictureEditable: false,
                               Visible: false,
                               Alpha: 255
                           },
                           {
                               Id: 5,
                               Name: "建设用地管制区",
                               Title: "建设用地管制区",
                               IndexInService: 23,
                               TileServiceName: "JSYDGZQ",
                               ShowAttributes: true,
                               Editable: false,
                               ShowPicture: false,
                               PictureEditable: false,
                               Visible: false,
                               Alpha: 255
                           },
                           {
                               Id: 6,
                               Name: "地形",
                               Title: "地形",
                               IndexInService: 23,
                               TileServiceName: "DX",
                               Editable: false,
                               ShowPicture: false,
                               PictureEditable: false,
                               Visible: true,
                               Alpha: 255
                           }
                       ],
                   Categories:
                       [
                           {
                               Id: 1,
                               Name: "标注数据",
                               Visible: true,
                               Layers:
                                   [
                                       {
                                           Id: 1,
                                           Name: "标注",
                                           Title: "标注",
                                           IndexInService: 1,
                                           TileServiceName: "",
                                           Editable: true,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Annotation: true,
                                           Visible: true,
                                           Alpha: 255,
                                           Symbol: {
                                               FillColor: { R: 255, G: 0, B: 0, A: 0 },
                                               OutlineColor: { R: 0, G: 255, B: 197, A: 1 }
                                           },
                                           CategoryId: 1,
                                           MinScale: 10000
                                       }
                                   ]
                           },
                           {
                               Id: 2,
                               Name: "用地信息数据",
                               Visible: true,
                               Layers:
                                   [
                                       {
                                           Id: 2,
                                           Name: "供地数据",
                                           Title: "供地数据",
                                           IndexInService: 7,
                                           TileServiceName: "GD",
                                           Editable: false,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: true,
                                           Alpha: 255,
                                           CategoryId: 2,
                                       },
                                       {
                                           Id: 3,
                                           Name: "土地权属",
                                           Title: "土地权属",
                                           IndexInService: 6,
                                           TileServiceName: "TDQS",
                                           Editable: false,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: true,
                                           Alpha: 255,
                                           CategoryId: 2,
                                       },
                                       {
                                           Id: 4,
                                           Name: "整治建新",
                                           Title: "整治建新",
                                           IndexInService: 5,
                                           TileServiceName: "ZZJX",
                                           Editable: false,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: true,
                                           Alpha: 255,
                                           CategoryId: 2,
                                       },
                                       {
                                           Id: 5,
                                           Name: "整治拆旧",
                                           Title: "整治拆旧",
                                           IndexInService: 4,
                                           TileServiceName: "ZZCJ",
                                           Editable: false,
                                           ShowPicture: false,
                                           PictureEditable: false,
                                           Visible: true,
                                           Alpha: 255,
                                           CategoryId: 2,
                                       },
                                        {
                                            Id: 6,
                                            Name: "农转用",
                                            Title: "农转用",
                                            IndexInService: 3,
                                            TileServiceName: "NZY",
                                            Editable: false,
                                            ShowPicture: false,
                                            PictureEditable: false,
                                            Visible: true,
                                            Alpha: 255,
                                            CategoryId: 2,
                                        }
                                   ]
                           },
                           {
                               Id: 3,
                               Name: "其他相关控规分析",
                               Visible: true,
                               Layers:
                                   [
                                        {
                                            Id: 7,
                                            Name: "标准农田上图入库",
                                            Title: "标准农田上图入库",
                                            IndexInService: 12,
                                            TileServiceName: "BZNT",
                                            Editable: false,
                                            ShowPicture: false,
                                            PictureEditable: false,
                                            Visible: true,
                                            Alpha: 255,
                                            CategoryId: 3,
                                        },
                                         {
                                             Id: 8,
                                             Name: "已建高标准",
                                             Title: "已建高标准",
                                             IndexInService: 10,
                                             TileServiceName: "GBZNT",
                                             Editable: false,
                                             ShowPicture: false,
                                             PictureEditable: false,
                                             Visible: true,
                                             Alpha: 255,
                                             CategoryId: 3,
                                         },
                                           {
                                               Id: 9,
                                               Name: "粮食功能区",
                                               Title: "粮食功能区",
                                               IndexInService: 9,
                                               TileServiceName: "LSGNQ",
                                               Editable: false,
                                               ShowPicture: false,
                                               PictureEditable: false,
                                               Visible: true,
                                               Alpha: 255,
                                               CategoryId: 3,
                                           }
                                   ]
                           },
                            {
                                Id: 4,
                                Name: "地价数据",
                                Visible: true,
                                Layers:
                                    [
                                         {
                                             Id: 10,
                                             Name: "级别基准地价",
                                             Title: "级别基准地价",
                                             IndexInService: 14,
                                             TileServiceName: "JBJ",
                                             Editable: false,
                                             ShowPicture: false,
                                             PictureEditable: false,
                                             Visible: true,
                                             Alpha: 255,
                                             CategoryId: 4,
                                         }
                                    ]
                            },
                            {
                                Id: 5,
                                Name: "地籍地形数据",
                                Visible: true,
                                Layers:
                                    [
                                        {
                                            Id: 11,
                                            Name: "地籍房屋层",
                                            Title: "地籍房屋层",
                                            IndexInService: 16,
                                            TileServiceName: "",
                                            Editable: true,
                                            ShowPicture: false,
                                            PictureEditable: false,
                                            Visible: true,
                                            Alpha: 255,
                                            CategoryId: 5,
                                        },
                                         {
                                             Id: 12,
                                             Name: "地籍宗地层",
                                             Title: "地籍宗地层",
                                             IndexInService: 17,
                                             TileServiceName: "DJZD",
                                             Editable: false,
                                             ShowPicture: false,
                                             PictureEditable: false,
                                             Visible: true,
                                             Alpha: 255,
                                             CategoryId: 5,
                                         }
                                    ]
                            },
                            {
                                Id: 6,
                                Name: "基础现状数据",
                                Visible: true,
                                Layers:
                                    [
                                        {
                                            Id: 13,
                                            Name: "现状地物",
                                            Title: "现状地物",
                                            IndexInService: 19,
                                            TileServiceName: "XZDW",
                                            Editable: false,
                                            ShowPicture: false,
                                            PictureEditable: false,
                                            Visible: true,
                                            Alpha: 255,
                                            CategoryId: 6,
                                        },
                                        {
                                            Id: 14,
                                            Name: "地类图斑",
                                            Title: "地类图斑",
                                            IndexInService: 20,
                                            TileServiceName: "DLTB",
                                            Editable: false,
                                            ShowPicture: false,
                                            PictureEditable: false,
                                            Visible: false,
                                            Alpha: 255,
                                            CategoryId: 6,
                                        }
                                    ]
                            },
                             {
                                 Id: 7,
                                 Name: "土地规划数据",
                                 Visible: true,
                                 Layers:
                                     [
                                         {
                                             Id: 15,
                                             Name: "规划用途",
                                             Title: "规划用途",
                                             IndexInService: 22,
                                             TileServiceName: "GHYT",
                                             Editable: false,
                                             ShowPicture: false,
                                             PictureEditable: false,
                                             Visible: false,
                                             Alpha: 255,
                                             CategoryId: 7,
                                         },
                                         {
                                             Id: 16,
                                             Name: "建设用地管制区",
                                             Title: "建设用地管制区",
                                             IndexInService: 23,
                                             TileServiceName: "JSYDGZQ",
                                             Editable: false,
                                             ShowPicture: false,
                                             PictureEditable: false,
                                             Visible: false,
                                             Alpha: 255,
                                             CategoryId: 7,
                                         }
                                     ]
                             }
                       ]
               },
        ]
};

var application = new MapApplication(
    configuration,
    "mapsetContainer", "mapTemplate", "overviewDiv", "overviewTemplateDiv"
);
