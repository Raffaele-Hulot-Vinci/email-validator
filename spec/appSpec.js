import { Main } from "../src/email_checker.js";

describe("email test", function() {
    const checker = new Main;

    const right = "email@domain.right";
    const wrongNoAt = "emaildomain.wrong";
    const wrongNoDot = "email@domainwrong";
    const wrongHasSpace = "email@ domain.wrong";
    const wrongAtAtEnd = "emaildomain.wrong@";

    it("HasAt right", function() {
        const result = checker.hasAt(right);
        expect(result).toBe(true);
    });

    it("HasAt wrongNoAt", function() {
        const result = checker.hasAt(wrongNoAt);
        expect(result).toBe(false);
    });

    it("HasAt wrongNoDot", function() {
        const result = checker.hasAt(wrongNoDot);
        expect(result).toBe(true);
    });

    it("HasAt wrongHasSpace", function() {
        const result = checker.hasAt(wrongHasSpace);
        expect(result).toBe(true);
    });

    it("HasAt wrongAtAtEnd", function() {
        const result = checker.hasAt(wrongAtAtEnd);
        expect(result).toBe(true);
    });
    
    
    it("hasDot right", function() {
        const result = checker.hasDot(right);
        expect(result).toBe(true);
    });

    it("hasDot wrongNoAt", function() {
        const result = checker.hasDot(wrongNoAt);
        expect(result).toBe(true);
    });

    it("hasDot wrongNoDot", function() {
        const result = checker.hasDot(wrongNoDot);
        expect(result).toBe(false);
    });

    it("hasDot wrongHasSpace", function() {
        const result = checker.hasDot(wrongHasSpace);
        expect(result).toBe(true);
    });

    it("hasDot wrongAtAtEnd", function() {
        const result = checker.hasDot(wrongAtAtEnd);
        expect(result).toBe(true);
    });
    
    
    it("hasNoSpace right", function() {
        const result = checker.hasNoSpace(right);
        expect(result).toBe(true);
    });

    it("hasNoSpace wrongNoAt", function() {
        const result = checker.hasNoSpace(wrongNoAt);
        expect(result).toBe(true);
    });

    it("hasNoSpace wrongNoDot", function() {
        const result = checker.hasNoSpace(wrongNoDot);
        expect(result).toBe(true);
    });

    it("hasNoSpace wrongHasSpace", function() {
        const result = checker.hasNoSpace(wrongHasSpace);
        expect(result).toBe(false);
    });

    it("hasNoSpace wrongAtAtEnd", function() {
        const result = checker.hasNoSpace(wrongAtAtEnd);
        expect(result).toBe(true);
    });


    it("lastNotAt right", function() {
        const result = checker.lastNotAt(right);
        expect(result).toBe(true);
    });

    it("lastNotAt wrongNoAt", function() {
        const result = checker.lastNotAt(wrongNoAt);
        expect(result).toBe(true);
    });

    it("lastNotAt wrongNoDot", function() {
        const result = checker.lastNotAt(wrongNoDot);
        expect(result).toBe(true);
    });

    it("lastNotAt wrongHasSpace", function() {
        const result = checker.lastNotAt(wrongHasSpace);
        expect(result).toBe(true);
    });

    it("lastNotAt wrongAtAtEnd", function() {
        const result = checker.lastNotAt(wrongAtAtEnd);
        expect(result).toBe(false);
    });

})