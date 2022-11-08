import React from 'react'
import Banner from '../Banner/Banner'
import HomeService from '../HomeService/HomeService'
import SkillSet from '../SkillSet/SkillSet'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SkillSet></SkillSet>
            <HomeService></HomeService>
        </div>
    )
}

export default Home