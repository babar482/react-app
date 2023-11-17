import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from '../ass/images/card.jpg'
export default function Project(){
    return(
        <>
        <div className="project-section container">
            <div className="row">
                <div className="pro-card col col-sm-12 col-md-4 col-lg-4">
                    <Card style={{ width: '18rem',marginBottom: "2rem", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                            </div>
                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' ,marginBottom: "2rem", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' ,marginBottom: "2rem", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col col-sm-12 col-md-4 col-lg-4">
                    <Card style={{ width: '18rem' ,marginBottom: "2rem", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                            </div>
                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' ,marginBottom: "2rem", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' ,marginBottom: "2rem", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        </>
    )
}