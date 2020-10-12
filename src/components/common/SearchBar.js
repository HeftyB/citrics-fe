import React, { useState, useEffect } from 'react';
import { AutoComplete, Input } from 'antd';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { searchBarActs, cardContainerActs } from '../../state/actions';
import '../../styles/style.less';
import { useHistory } from 'react-router-dom';

function SearchBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { fetchSpecificCityData } = cardContainerActs;
  const { fetchCities, filterCities } = searchBarActs;
  const { filter, cityData, loading, error } = useSelector(
    state => state.searchBar
  );

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const onChange = value => dispatch(filterCities(value));
  // you can pass the object id to global state from here
  const onSelect = (value, obj) => {
    dispatch(fetchSpecificCityData(obj.id));
    //history.push('/login');
    //(obj.id)
  };

  return (
    <div className="search-container">
      <AutoComplete
        defaultValue={filter}
        options={cityData}
        style={{ width: '100%' }}
        onSelect={onSelect}
        defaultActiveFirstOption={true}
        onChange={onChange}
        filterOption={true}
        dropdownMatchSelectWidth={true}
      >
        <Input
          placeholder="Search"
          prefix={<LeftOutlined />}
          suffix={<SearchOutlined />}
        />
      </AutoComplete>
    </div>
  );
}

export default SearchBar;
