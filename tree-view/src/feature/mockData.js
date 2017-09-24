export default {
  mock1: [{
      "id": 0,
      "name": "root",
      "children": [{
          "id": 1,
          "name": "A",
      }, {
          "id": 2,
          "name": "B",
          "children": [{
              "id": 3,
              "name": "C",
          }, {
              "id": 4,
              "name": "D",
              "children": [{
                  "id": 5,
                  "name": "E",
              }]
          }, {
              "id": 6,
              "name": "F",
              "children": [{
                  "id": 7,
                  "name": "G",
              }]
          }]
      }]
  }],

  mock2: 
  [
    {
      "id": 2,
      "name": "Fruits",
      "children": [
        {
          "id": 3,
          "name": "Apple"
        },
        {
          "id": 4,
          "name": "Cherry"
        },
        {
          "id": 5,
          "name": "Water melon"
        }
      ]
    },
    {
      "id": 6,
      "name": "Cars",
      "children": [
        {
          "id": 7,
          "name": "Ford"
        },
        {
          "id": 8,
          "name": "Audi"
        },
        {
          "id": 10016,
          "name": "Tesla"
        }
      ]
    },
    {
      "id": 9,
      "name": "Names",
      "children": [
        {
          "id": 10,
          "name": "Boys",
          "children": [
                {
                  "id": 163,
                  "name": "Bob"
                },
                {
                  "id": 164,
                  "name": "Tom"
                }
              ]
        },
        {
          "id": 11,
          "name": "Girls",
          "children": [
                {
                  "id": 165,
                  "name": "Alice"
                },
                {
                  "id": 164,
                  "name": "Tina"
                }
              ]
        }
      ]
        
    }
  ]
  
};