(() => {
    // =====
    // Expressive names
    // =====

    // Files to evaluate
    const files = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ];

    // Files to delete
    const filesToDelete = files.map( file => file.flagged );


    // =====
    // Do not include technical info on names
    // =====

    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Better
    class User { };
    interface User { };


    // =====
    // Examples
    // =====

    // Today
    const today = new Date();

    // Elapsed time in days
    const elapsedTimeInDays: number = 23;

    // Number of files in directory
    const filesNumber = 33;

    // First name
    const firstName = 'John';

    // Days since modification
    const daysSinceLastModification = 12;

    // Max classes per student
    const maxClassesPerStudent = 6;
})();
