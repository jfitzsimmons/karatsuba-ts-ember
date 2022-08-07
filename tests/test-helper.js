import Application from 'karatsuba-ts-ember/app';
import config from 'karatsuba-ts-ember/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setup(QUnit.assert);

setApplication(Application.create(config.APP));

start();
