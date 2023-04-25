import React from 'react';
import { FacebookShareButton,FacebookIcon, InstapaperIcon,LinkedinIcon} from "react-share";

export default function Footer() {
  return (
    <div>
    <h6 className='face'  style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}> © 2021 Copyright</h6>
    <FacebookIcon/>
    <InstapaperIcon/>
    <LinkedinIcon/>
    <InstapaperIcon/>
    </div>
  )
}
