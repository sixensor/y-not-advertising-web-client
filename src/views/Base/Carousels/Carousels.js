import React, {Component} from 'react';
import {Carousel, CarouselControl, CarouselIndicators, CarouselItem, Container} from 'reactstrap';
import caroImage1 from '../../../assets/img/ynot/caro1.jpg'
import caroImage2 from '../../../assets/img/ynot/caro2.png'
import caroImage3 from '../../../assets/img/ynot/caro3.jpg'

const items = [
  {
    title: 'Identify More Breakthrough Business Opportunities !',
    src: caroImage1,
    altText: '',
    caption: '',
  },
  {
    title: 'Strengthen Your Marketing Skills !',
    src: caroImage2,
    altText: '',
    caption: '',
  },
  {
    title: 'Get An Efficient And Innovative SMS Gateway !',
    src: caroImage3,
    altText: '',
    caption: '',
  }
];

class Carousels extends Component {

  constructor(props) {
    super(props);
    this.state = {activeIndex: 0};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex});
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex});
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({activeIndex: newIndex});
  }

  render() {
    const {activeIndex} = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          {/*<img className="d-block w-100" src={item.src} alt={item.altText}/>*/}
          {/*<CarouselCaption captionText={item.caption} captionHeader={item.caption}/>*/}
          <div
            className="page-header section-dark"
            style={{
              backgroundImage:
                "url(" + item.src + ")"
            }}
          >0
            <div className="filter"/>
            <div className="content-center">
              <Container>
                <div className="title-brand">
                  <h1 className="main-slider-text">
                    {item.title}
                  </h1>
                </div>
                <h2 className="presentation-subtitle text-center">
                </h2>
              </Container>
            </div>
          </div>
        </CarouselItem>
      );
    });

    return (
      <div className="animated fadeIn">
        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
        </Carousel>
      </div>
    );
  }
}

export default Carousels;
