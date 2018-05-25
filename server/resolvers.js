const db = require('./db');

const Query = {
    company: (root, {id}) => db.companies.get(id),
    // job: (root, args) => db.jobs.get(args.id),
    job: (root, {id}) => db.jobs.get(id),
    jobs: () => db.jobs.list()
};
//Return the company whose id is the same id as this job.
const Job = {
    company: (job) => db.companies.get(job.companyId)
};

module.exports = {
    Query, Job
}
