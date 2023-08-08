import proImg from '../../assets/icons/profile.png';
import MiniProfileCard from '../cards/MiniProfileCard';

const ProfileGrid = () => {
    const cards = [
        {
            dp: proImg,
            name: "Dyna Holi",
            designation: "Former Employee",
            title: "Title start here",
            description: "One of the top organisations with strong fundamentals in terms of both professional and personal growth",
        },
        {
            dp: proImg,
            name: "Dyna Holi",
            designation: "Former Employee",
            title: "Title start here",
            description: "One of the top organisations with strong fundamentals in terms of both professional and personal growth",
        },
        {
            dp: proImg,
            name: "Dyna Holi",
            designation: "Former Employee",
            title: "Title start here",
            description: "One of the top organisations with strong fundamentals in terms of both professional and personal growth",
        },
        {
            dp: proImg,
            name: "Dyna Holi",
            designation: "Former Employee",
            title: "Title start here",
            description: "One of the top organisations with strong fundamentals in terms of both professional and personal growth",
        },
        {
            dp: proImg,
            name: "Dyna Holi",
            designation: "Former Employee",
            title: "Title start here",
            description: "One of the top organisations with strong fundamentals in terms of both professional and personal growth",
        },
        {
            dp: proImg,
            name: "Dyna Holi",
            designation: "Former Employee",
            title: "Title start here",
            description: "One of the top organisations with strong fundamentals in terms of both professional and personal growth",
        },
    ]

  return (
    <div className='container-fluid'>
        <div className='row'>
            {
                cards.map((card, index) => {
                    return(
                        <MiniProfileCard key={index} data={card} />
                    )
                }
                )
            }
        </div>
    </div>
  )
}

export default ProfileGrid