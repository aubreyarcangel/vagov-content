const mock = require('./mock-helpers');

const enrollmentData = {
  dataOfBirth: '1995-11-12T06:00:00.000+0000',
  delimitingDate: '2017-12-07T05:00:00.000+0000',
  eligibilityDate: '2016-12-01T05:00:00.000+0000',
  enrollments: [
    {
      amendments: [],
      beginDate: '2012-11-01T04:00:00.000+00:00',
      endDate: '2012-12-01T05:00:00.000+00:00',
      facilityCode: '11902614',
      facilityName: 'PURDUE UNIVERSITY',
      fullTimeCreditHourUnderGrad: null,
      fullTimeHours: 12,
      hourType: null,
      onCampusHours: 12,
      onlineHours: 0,
      participantId: '11170323',
      status: 'Approved',
      termId: null,
      trainingType: 'UnderGrad',
      vacationDayCount: 0,
      yellowRibbonAmount: 0
    },
    {
      amendments: [
        {
          changeEffectiveDate: '2017-06-06T17:01:03.926Z',
          onCampusHours: 12,
          onlineHours: 8,
          status: 'Approved',
          type: 'Add',
          yellowRibbonAmount: 2
        },
        {
          changeEffectiveDate: '2017-06-10T17:01:03.926Z',
          onCampusHours: 8,
          onlineHours: 6,
          status: 'Approved',
          type: 'Drop',
          yellowRibbonAmount: 2
        }
      ],
      beginDate: '2017-06-06T17:01:03.925+00:00',
      endDate: '2017-09-06T17:01:03.925+00:00',
      facilityCode: '12123434',
      facilityName: 'CENTRAL CITY UNIVERSITY',
      fullTimeCreditHourUnderGrad: null,
      fullTimeHours: 20,
      hourType: null,
      onCampusHours: 10,
      onlineHours: 10,
      participantId: '11180666',
      status: 'Approved',
      termId: null,
      trainingType: 'UnderGrad',
      vacationDayCount: 0,
      yellowRibbonAmount: 0
    }
  ],
  firstName: 'First',
  lastName: 'Last',
  nameSuffix: 'II',
  originalEntitlement: 100,
  percentageBenefit: 25,
  regionalProcessingOffice: 'Central Office Washington, DC',
  remainingEntitlement: 25,
  usedEntitlement: 75,
  vaFileNumber: '12345678',
};

// Create API routes
function initApplicationMock() {
  mock(null, {
    path: '/v0/post911_gi_bill_status',
    verb: 'get',
    value: enrollmentData
  });
}

module.exports = {
  enrollmentData,
  initApplicationMock
};
