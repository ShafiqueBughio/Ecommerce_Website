/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #fde1ff, #e1ffea 60%)',
        'new_custom-gradient':'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)',
        'latest_color': 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(250,41,41,1) 0%, rgba(252,176,69,1) 100%);'
      },
      textImage:{
        'latest_text':'rgb(238,0,0);'
      }
    
    },
  },
  plugins: [],
}

