const isTheSameDistrict = (group, employee) => {
    for(let other of group)
    {
        if(other.district === employee.district) return true;
    }
    return false;
}

const isTheSameDepartment = (group, employee) => {
    for(let other of group)
    {
        if(other.department === employee.department) return true;
    }
    return false;
}

const isTheSameAge = (group, employee) => {
    for(let other of group)
    {
        if(other.age === employee.age) return true;
    }
    return false;
}

const hasGroupFreePlace = (group, size) => {
    return group.length < size;
}

const isGroupAvailable = (group, size, employee) => {
    const chance = Math.random() < 0.5;

    return (hasGroupFreePlace(group, size) && 
            !isTheSameDepartment(group, employee) && 
            !isTheSameDistrict(group, employee) && 
            (!isTheSameAge(group, employee) || chance));
}

const createEmptyGroups = (numOfGroups) => {
    const groups = [];
    for(let i = 0; i < numOfGroups;i++) {
        groups.push([])
    };
    return groups
}

const formGroups = (list, size) => {
    const numOfGroups = Math.ceil(list.length / size);

    const groups = createEmptyGroups(numOfGroups)

    const cantEnplace = [];
    while(list.length > 0) {
        let nextToPlace = list.pop();
        let canBeEnplaced = false;
        for(let group of groups) {
        if(isGroupAvailable(group, size, nextToPlace)) {
            group.push(nextToPlace);
            canBeEnplaced = true;
            break;
        }
        }
        if(!canBeEnplaced) {
        cantEnplace.push(nextToPlace);
        }
    }

    while(cantEnplace.length > 0) {
        let nextToPlace = cantEnplace.pop();

        for(let group of groups) {
        if(hasGroupFreePlace(group, size)) {
            group.push(nextToPlace);
            break;
        }
        }
    }
    return groups;
}

module.exports = {
    formGroups: formGroups,
    isTheSameDistrict: isTheSameDistrict,
    isTheSameDepartment: isTheSameDepartment,
    isTheSameAge: isTheSameAge,
    hasGroupFreePlace: hasGroupFreePlace,
    createEmptyGroups: createEmptyGroups
};