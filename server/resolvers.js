const db = require('./db');

const Query = {
    company: (root, {id}) => db.companies.get(id),
    // job: (root, args) => db.jobs.get(args.id),
    job: (root, {id}) => db.jobs.get(id),
    jobs: () => db.jobs.list()
};

const Mutation = {
    createJob: (root, {input}, {user}) => {
        //Check if the user is auth
        if(!user){
            throw new Error('Unauthorized');
        }
        const id = db.jobs.create(input);
        return db.jobs.get(id);
    }
}

const Company = {
    jobs: (company) => {
        return db.jobs.list().filter((job) => job.companyId === company.id);
    }
};

//Return the company whose id is the same id as this job.
const Job = {
    company: (job) => db.companies.get(job.companyId)
};

module.exports = {
    Query,  Mutation, Company,Job
}
