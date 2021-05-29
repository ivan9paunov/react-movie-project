import {
    Card,
    CardImg,
    CardBody, 
    CardLink,
  } from 'reactstrap';
  import ProfilePic from "../../user.jpg"

  const MyProfileCard = (props) => {
    return (
        <Card>
          <CardBody>
            
            <CardImg src={ProfilePic}/>
            <CardBody className="text-center">
              <CardLink href="/profile" className="userLinks">Моят профил</CardLink>  
            </CardBody>
            <CardBody className="text-center">
              <CardLink href="/addMovie" className="userLinks">Добави филми</CardLink>  
            </CardBody>
            <CardBody className="text-center">
              <CardLink href="/addTvSerie" className="userLinks">Добави сериали</CardLink>  
            </CardBody>
            <CardBody className="text-center">
              <CardLink href="#" className="userLinks">Любими</CardLink>  
            </CardBody>
            
          </CardBody>
        </Card>
    );
  };
  
  export default MyProfileCard;