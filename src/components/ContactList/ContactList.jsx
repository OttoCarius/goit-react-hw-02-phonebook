import PropTypes from 'prop-types';

import { StyledList } from './ContactList.styled';
import { StyledText } from './ContactList.styled';

const ContactList = ({ contacts, onRemove }) => {
  return (
    <div>
      <StyledList>
        {contacts.length === 0 ? null : (
          <>
            {contacts.map(contact => {
              return (
                <li key={contact.id}>
                  <StyledText>
                    {contact.name} : {contact.number}
                  </StyledText>
                  <button
                    onClick={() => {
                      onRemove(contact.id);
                    }}
                  ></button>
                </li>
              );
            })}
          </>
        )}
      </StyledList>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func,
};

export default ContactList;
