import React from 'react';
import { ScrollView } from 'react-native';

import PropertyItemDetails from '../property/Item/Details';

export interface Props {}
// export interface State { }

export default () => {
  return (
    <ScrollView style={{ width: '100%', flexDirection: 'column' }}>
      <PropertyItemDetails />
    </ScrollView>
  );
};
