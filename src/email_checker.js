export class Main{

    hasAt(email){
        return email.includes('@');
    }

    hasDot(email){
        return email.includes('.');
    }

    hasNoSpace(email){
        return !email.includes(' ');
    }

    lastNotAt(email){
        return email.charAt(email.length-1) != '@';
    }
}