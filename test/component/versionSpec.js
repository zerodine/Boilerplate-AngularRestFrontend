describe('Component: version', function() {
    beforeEach(module('components.version'));

    it('should be 0.0.1', inject(function (version) {
        expect(version).toBe('0.0.1');
        expect(version).not.toBe('0.0.2');
    }));
});