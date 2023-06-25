import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import cookies from 'js-cookie'
import "/node_modules/flag-icons/css/flag-icons.min.css";

import LanguageIcon from '@mui/icons-material/Language';

import './flags.css';

import { useTranslation } from "react-i18next";
import i18next from 'i18next'
import classNames from 'classnames'


export default function LanguageFlags() {

    const languages = [
       
        {
          code: 'en',
          country_code: 'gb',
          name: 'English'
        },
      
       
        {
          code: 'ua',
          country_code: 'ua',
          name: 'Ukraine'
        },
      ]

    const { t } = useTranslation();

    const currentLanguageCode = cookies.get('i18next') || 'en'

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


return (
<div className='flags'>
<Tooltip title={t('language')} arrow>
  <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
    <LanguageIcon style={{width:'32px', height:'32px'}}/>
  </IconButton>
</Tooltip>
<Menu 
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  onClick={handleClose}
  

>
  {languages.map(({ code, name, country_code}) => (
   
    <MenuItem key={code} style={{
      backgroundColor: currentLanguageCode === code ? '#D8D8D8' : '#F8F8F8',      
      border: currentLanguageCode === code ? '1px solid #989898' : '#F8F8F8'             
    }}>
    <IconButton 
      className={classNames('dropdown-item')}
      onClick={() => {
      i18next.changeLanguage(code)  
    }}                            
    >
      
    <div className={`fi fi-${country_code}`}
    style={{
      opacity: currentLanguageCode === code ? 1 : 0.3,
      width: '3rem',                             
      height: '2rem', 
                                    
    }}
    >
    </div>
    
    </IconButton>  
    </MenuItem>    
                                       
  ))}
  
</Menu>

</div>
)
}