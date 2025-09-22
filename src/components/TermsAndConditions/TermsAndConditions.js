import React from 'react'
import { Link } from 'react-router-dom'
import StyledSmText from '../../common/components/styledSmText/StyledSmText'

const TermsAndConditions = () => {
    return (
        <div>
            <Link to="/terms-and-conditions">
                <StyledSmText className='py-2 text-xs !font-normal text-center'>
                    Terms and Conditions
                </StyledSmText>
            </Link>
        </div>
    )
}

export default TermsAndConditions