import { Component } from 'react';
import { connect } from 'react-redux';

import ContactsList from '..//..//components/ContactsList';
import ContactsListItem from '..//..//components/ContactListItem';
import ContactForm from '..//..//components/ContactForm';
import Filter from '..//..//components/Filter';

import Spinner from 'react-bootstrap/Spinner';

import { fetchContacts } from '..//..//redux/contacts/contacts-operations';

import {
  getItems,
  getLoadingItems,
} from '../../redux/contacts/contacts-selectors';

import './ContactsPage.scss';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <section>
        <div className="PhonebookWrapper">
          <ContactForm />
          <div className="ContactsWrapper">
            <h2 className="Title">Contacts</h2>

            {this.props.items.length > 0 ? (
              <>
                <Filter />

                <ContactsList>
                  {this.props.isLoading && <Spinner animation="border" />}
                  <ContactsListItem />
                </ContactsList>
              </>
            ) : (
              <span>You have no contacts yet </span>
            )}
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  items: getItems(state),
  isLoading: getLoadingItems(state),
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchContacts()),
  // onGetCurrentUser: () => dispatch(getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
