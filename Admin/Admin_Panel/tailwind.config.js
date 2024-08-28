/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 1px 3px -2px #000',
      },
         backgroundColor: {
        'custom-bg': '#f6f6f6',
        
      },
      textColor:{
        'custom_text':'#7b7b7b',
        'list_color':'#454545'
        
        
      },
      borderColor:{
        'border_color':"#c3c3c3",
        'unique_border_color' : "#7b7b7b8d",
      },
      backgroundImage:{
         'latest_color': 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(250,41,41,1) 0%, rgba(252,176,69,1) 100%);'
      },
      gridTemplateColumns: {
        // Custom grid template
        'custom-layout': '1fr 3fr 1fr 1fr 1fr 1fr',
      },
    },
  },
  plugins: [],
}

