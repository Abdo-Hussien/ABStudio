import '../App.scss';


export default function ProfilePicture() {
    return (
        <>
            <div className="profile-picture flex justify-center">
                <img src="/Arrow.png" alt="arrow" className="arrow" />
                <img src="/Profile picture.png" className="picture" alt="logo" />
                {/* <p className="text-center">Aspiring Web Developer</p> */}
            </div>
        </>
    )
}