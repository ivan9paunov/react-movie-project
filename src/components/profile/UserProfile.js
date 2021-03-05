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
              <CardLink href="#" className="userLinks">Моят профил</CardLink>  
            </CardBody>
            <CardBody className="text-center">
              <CardLink href="#" className="userLinks">Любими филми</CardLink>  
            </CardBody>
            <CardBody className="text-center">
              <CardLink href="#" className="userLinks">Любими сериали</CardLink>  
            </CardBody>
            <CardBody className="text-center">
              <CardLink href="#" className="userLinks">За гледане по-късно</CardLink>  
            </CardBody>
            <CardBody className="text-center">
              <CardLink href="#" className="userLinks">Изход</CardLink>  
            </CardBody>
            
          </CardBody>
        </Card>
    );
  };
  
  export default MyProfileCard;