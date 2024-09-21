import '../App.scss';


export default function ProfilePicture() {
    return (
        <>
            <div className="profile-picture rounded-full flex justify-center">
                <img src="/Arrow.png" alt="arrow" className="arrow opacity-0 md:opacity-100" />
                <img src="/Profile_picture.png" className="picture" alt="logo" />
            </div>
        </>
    )
}