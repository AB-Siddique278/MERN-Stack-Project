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
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default Home;