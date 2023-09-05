import './welcome-tablet.scss';
import {Link} from "@inertiajs/react";
import Btn from "@/Components/Btn/Btn.jsx";
import Block from "@/Components/Block/Block.jsx";
import BlockTitle from "@/Components/BlockTitle/BlockTitle.jsx";

const WelcomeTablet = () => {
    return (

            <Block small>

                <BlockTitle text="Приветсевую!"/>

                    <div className="welcome-tablet">
                <p className="welcome-tablet__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nihil saepe similique ullam ut vitae.
                    Blanditiis explicabo magnam quidem ratione.
                </p>

                <div className="welcome-tablet__bottom">
                    <Link href={route('login')}>
                        <Btn text='Вход'/>
                    </Link>

                    <Link href={route('register')}>
                        <Btn text='Регистрация'/>
                    </Link>
                </div>
                </div>
            </Block>

    )
}

export default WelcomeTablet;
