import React from 'react'
import useTitle from '../../../useTitle/useTitle'
import About from '../../About/About'
import Faq from '../../Faq/Faq'
import WorkedWith from '../../WorkedWith/WorkedWith'
import Banner from '../Banner/Banner'
import HomeService from '../HomeService/HomeService'
import SkillSet from '../SkillSet/SkillSet'

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <SkillSet></SkillSet>
            <HomeService></HomeService>
            <About></About>
            <WorkedWith></WorkedWith>
            <Faq></Faq>
        </div>
    )
}

export default Home