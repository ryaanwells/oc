'use strict';

var colors = require('colors/safe');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('cli : facade : registry : add', function(){

  var logSpy = {},
      Registry = require('../../src/cli/domain/registry'),
      registry = new Registry(),
      RegistryFacade = require('../../src/cli/facade/registry-add'),
      registryFacade = new RegistryFacade({ registry: registry, logger: logSpy });

  var execute = function(){
    logSpy.log = sinon.spy();
    registryFacade({ }, function(){});
  };

  describe('when adding a not valid registry', function(){

    beforeEach(function(){
      sinon.stub(registry, 'add').yields('An error!!!', null);
      execute();
    });

    afterEach(function(){
      registry.add.restore();
    });

    it('should show the error', function(){
      expect(logSpy.log.args[0][0]).to.equal(colors.red('An error!!!'));
    });
  });

  describe('when adding a valid registry', function(){

    beforeEach(function(){
      sinon.stub(registry, 'add').yields(null, 'ok!');
      execute();
    });

    beforeEach(function(){
      registry.add.restore();
    });

    it('should show a confirmation message', function(){
      expect(logSpy.log.args[0][0]).to.equal(colors.green('oc registry added'));
    });
  });
});