import React from 'react'

function HomeAdmin() {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-start align-item-center'>
                <div className='col-md-3'>
                    <img
                        src='assest/BloodBankHome.jpg'
                        alt='admin_page'
                        style={{ width: "100%" }} />
                </div>
                <div className='col-md-9'>
                    <h6>Admin Home Page</h6>
                    <hr />
                    <p>

                        A blood bank is a vital component of the healthcare system responsible for the collection,
                        testing, processing, storage, and distribution of blood and blood products to ensure a
                        safe and sufficient blood supply for patients requiring transfusions due to surgeries,
                        trauma, cancer treatments, and other medical conditions. Blood is collected from volunteer
                        donors who undergo health screenings to determine eligibility, and donations can include
                        whole blood or specific components like plasma, platelets, and red blood cells through
                        apheresis. Once collected, blood is rigorously tested for infectious diseases such as
                        HIV, hepatitis B and C, and syphilis to ensure safety. The blood is then separated into
                        its components, each serving different therapeutic purposes, and stored under strict
                        temperature-controlled conditions—red blood cells at 1-6°C for up to 42 days,
                        platelets at 20-24°C for up to 5 days, and plasma can be frozen for up to a year.
                        Blood banks collaborate closely with hospitals, clinics, and emergency services to
                        supply necessary blood components, ensuring availability in emergencies and maintaining
                        a readily accessible inventory. Operating under stringent regulations from health
                        authorities like the FDA, AABB, and WHO, blood banks follow strict protocols to ensure
                        donor and recipient safety, maintain accurate records, and conduct regular audits.
                        Additionally, they engage in public awareness campaigns to encourage blood donation,
                        educate communities on its importance, and organize blood drives to sustain a stable blood
                        supply. Through these comprehensive efforts, blood banks play a crucial role in supporting
                        medical treatments and saving lives


                    </p>
                    <button className='btn btn-primary'>Shop</button>
                </div>
            </div>

        </div>
    )
}

export default HomeAdmin