import '../styles.css';
import React from 'react'





function ThemeSelector(){

    

    const [theme, setTheme] = React.useState("theme1")

    const switchTheme= (num) =>{
        setTheme(num)
        document.documentElement.className = num;
        
    }
    
    return(
        <div className="themediv">
            <h2>calc</h2>
            <div className="selectordiv">
                <h5 className="themelabel">THEME</h5>
                <div className="selector">
                    <div className="themeNo">
                        <h5 onClick={()=>switchTheme("theme1")}>1</h5>
                        <h5 onClick={()=>switchTheme("theme2")}>2</h5>
                        <h5 onClick={()=>switchTheme("theme3")}>3</h5>
                    </div>
                    <div className="slider">
                        <div className="notch"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ThemeSelector