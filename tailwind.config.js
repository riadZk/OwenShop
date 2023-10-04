/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'Cdark':"rgb(44, 54, 57)",
        'Cdark2':"#18122B",
        'Cdark3':"#181818",
         'Cdark4':'#0A1931',
         'Cdark5':'#222831',
         'Cdark6':'#000000',
         'Cdark7':'#100F10',
         'Cdark8':'#1B1B1B',
         'Cdark9':'#242424',
         'Linkedin':'#0a66c2',
         'Twitter':'#1a73e8',
         'Light':'#EDEDED',
         'paypal':'#0070ba'
          
      }
    },
  },
  plugins: [],
}