import './App.css'
import React from 'react';

import ProductTable from './components/repetition/ProductsTable'
import StudentList from './components/repetition/StudentList'
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember"
import Card from './components/layout/Card';
import First from './components/basics/First';
import WithParam from './components/basics/WithParam';
import Fragment from './components/basics/Fragment';
import Random from './components/basics/Random';

export default _ => (
    <div className="App">
        <h1>React Essentials</h1>

        <div className="Cards">
        <Card title="#07 Product Table Challenge" color="#8458B3">
                <ProductTable>
                </ProductTable>
            </Card>
        <Card title="#06 Repetition" color="#FF4C65">
                <StudentList>
                </StudentList>
            </Card>
            <Card title="#05 Component with Children" color="#51e2f5">
                <Family lastName="Christofolli">
                    <FamilyMember name="Daniel" />
                    <FamilyMember name="Daiane" />
                    <FamilyMember name="Pipoca" />
                </Family>
            </Card>
            <Card title="#04 Random Challenge" color="#FA6900">
                <Random min={1} max={60} />
            </Card>

            <Card title="#03 Fragment" color="#E94C6F">
                <Fragment />
            </Card>

            <Card title="#02 With Param" color="#E8B71A">
                <WithParam
                    title="Student situation"
                    student="Daniel Christofolli"
                    grade={9.0}
                />
            </Card>

            <Card title="#01 First Component" color="#588C73">
                <First></First>
            </Card>
        </div>
    </div>
);