import React from 'react';

const Home = () => {
    return (
        <div className='mt-3'>
            <div className='container'>
                <div className='add_btn mt-2'>
                    <button type="button" class="btn btn-primary"> Add Data </button>

                </div>

                <table class="table mt-5">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">Id</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Job</th>
                            <th scope="col">Email</th>
                            <th scope="col">Numbers</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Siddique</td>
                            <td>Web developer</td>
                            <td>Siddique@gmail.com</td>
                            <td>+8801789848646</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'><i class="fa-solid fa-eye"></i> </button>
                                <button className='btn btn-primary'><i class="fa-solid fa-pen"></i> </button>
                                <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default Home;