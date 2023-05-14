import React from 'react';
import PropTypes from 'prop-types';
function Filter(props) {
return (
<label>
Search Contacts:
<input
     type="text"
     name="filter"
     value={props.filter}
     onChange={props.onChange}
   />
</label>
);
}
Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
