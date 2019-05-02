import React, { Component} from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLoc from './Map';
import { Container, Row, Col } from 'reactstrap';

// const mapStyles = {
//     width: '50%',
//     height: '50%'
// }

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
            });
        }
    };

    render() {
        return (
            <Container>
                <Col xs="6">.col-6></Col>
                    <div className="Map-container-column">
                        <CurrentLoc
                            centerAroundCurrentLocation
                            google={this.props.google}
                        >
                        <Marker onClick={this.onMarkerClick} name={'YOU ARE HERE📍'} />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                            </div>
                        </InfoWindow>
                        </CurrentLoc>
                    </div>

            </Container>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBjamtNScJzV67YI6RW_kOzzTgsV-EdjAM'
  })(MapContainer);