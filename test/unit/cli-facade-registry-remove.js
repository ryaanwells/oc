'use strict';

var colors = require('colors/safe');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('cli : facade : registry : remove', function(){

  var logSpy = {},
      Registry = require('../../src/cli/domain/registry'),
      registry = new Registry(),
      RegistryFacade = require('../../src/cli/facade/registry-remove'),
      registryFacade = new RegistryFacade({ registry: registry, logger: logSpy });

  var execute = function(){
    logSpy.log = sinon.spy();
    registryFacade({ }, function(){});
  };

  describe('when removing a registry and having some problem removing it', function(){

    beforeEach(function(){
      sinon.stub(registry, 'remove').yields('something bad happened!', null);
      execute();
    });

    afterEach(function(){
      registry.remove.restore();
    });

    it('should show the error', function(){
      expect(logSpy.log.args[0][0]).to.equal(colors.red('something bad happened!'));
    });
  });

  describe('when removing a valid registry', function(){

    beforeEach(function(){
      sinon.stub(registry, 'remove').yields(null, 'ok!');
      execute();
    });

    afterEach(function(){
      registry.remove.restore();
    });

    it('should show a confirmation message', function (){
      expect(logSpy.log.args[0][0]).to.equal(colors.green('oc registry deleted'));
    });
  });
});