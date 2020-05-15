import React from 'react';
import { connect } from 'react-redux';
import { Country, City } from '../api/model';
import { IWeatherAppState } from '../store/cityStore';
import { SEACapitals } from '../resources/cityListPerCountry';
import { selectCountry } from '../store/actions/countryListActions';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

interface Props {

}
interface ReduxStateProps {
}
interface DispatchProps {
    onCountrySelect: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const CountryListDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
    const { onCountrySelect } = props;
    return (
        <Container fluid>
            <Row>
                <Col>
                    <ListGroup variant={'flush'}>
                        {SEACapitals.map(c => <ListGroup.Item onClick={onCountrySelect}>{`${c.country}, ${c.cityName}`}</ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>

    );
}

export const CountryList = connect<ReduxStateProps, DispatchProps, Props, IWeatherAppState>((state) => ({
}), dispatch => ({
    onCountrySelect: event => {
        const country = event.currentTarget.innerHTML.substr(0, event.currentTarget.innerHTML.indexOf(',')) as Country;
        const city = event.currentTarget.innerHTML.substr(event.currentTarget.innerHTML.indexOf(',') + 2, 100);
        return dispatch(selectCountry({ country, city }));
    }
}))(CountryListDump)