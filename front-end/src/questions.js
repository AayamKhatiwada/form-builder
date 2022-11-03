const questions = {
    "title": "Anything",
    "description": "Something description ...............",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "boolean",
        "name": "Boolean Test",
        "title": "What is this box?",
        "isRequired": true,
        "labelTrue": "Understood",
        "labelFalse": "Deny"
       },
       {
        "type": "text",
        "name": "Name",
        "title": "Your full name.",
        "description": "Enter your full name.",
        "isRequired": true,
        "placeholder": "Full name"
       },
       {
        "type": "text",
        "name": "Email",
        "title": "Your email",
        "description": "Enter your email",
        "isRequired": true,
        "inputType": "email",
        "autoComplete": "email",
        "placeholder": "Email"
       },
       {
        "type": "rating",
        "name": "question3",
        "title": "Rate this product",
        "rateValues": [
         1,
         2,
         3,
         4,
         5
        ]
       },
       {
        "type": "dropdown",
        "name": "Language",
        "title": "Select language",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Python"
         },
         {
          "value": "item2",
          "text": "Php"
         },
         {
          "value": "item3",
          "text": "Javascript (Node)"
         }
        ]
       },
       {
        "type": "text",
        "name": "Date of birth",
        "title": "Date of birth",
        "inputType": "datetime"
       }
      ]
     }
    ]
   }

export default questions