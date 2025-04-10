import {render} from '@testing-library/react';
import {create} from "react-test-renderer";

import Greeting from './Greeting';

test("matches the snapshot",()=>{
    const component=create(<Greeting name="john"/>);

   let tree=component.toJSON();
   expect(tree).toMatchSnapshot();
});