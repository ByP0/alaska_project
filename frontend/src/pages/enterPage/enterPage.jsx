import './enterPage.css'
import cassette from '../../images/cassette.png'
import { IoMdPlay } from "react-icons/io";
import {useNavigate,Link} from 'react-router-dom'


export const EnterPage=()=>{

    const navigate=useNavigate()
    const handleClickCassets=()=>{
        navigate('/main')
    }

    return(
        <div className='container'>
            <div className='image'>
                <img src={cassette} className='img-cassets' onClick={handleClickCassets}/>
            </div>
            <div className='play-section' onClick={handleClickCassets}>
                <IoMdPlay/>
                <span className='play-btn'>PLAY</span>
            </div>
            <div className='enter-footer'>
                <span>Нажимая на кнопку play, вы соглашаетесь<br/>
                    на обработку <Link className='link-data'>персональных данных</Link></span>
            </div>
          
        </div>
    )
}   